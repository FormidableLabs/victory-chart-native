var fs = require("fs");
var babel = require("babel-core");
var mockery = require("mockery");
var origJs = require.extensions[".js"];

// Compile a path with babel
var compile = function (fileName) {
  var src = fs.readFileSync(fileName, "utf8");
  var output = babel.transform(src, {
    filename: fileName
  }).code;
  return output;
}

// We need to compile a few node_modules
var shouldCompile = function (fileName) {
  var should = [
    "node_modules/victory-core-native",
    "node_modules/victory-core",
    "node_modules/victory-chart"
  ].some(function (mod) {
    return fileName.indexOf(mod) >= 0;
  });
  return should;
};

// Babel compile things not in node_modules
require.extensions[".js"] = function (module, fileName) {
  if (shouldCompile(fileName) || fileName.indexOf("node_modules/") === -1) {
    return module._compile(compile(fileName), fileName);
  }
  return origJs(module, fileName);
};

// Mock react-native
require("react-native-mock/mock");

// Custom mock for react-native-svg
mockery.enable({ warnOnUnregistered: false });
mockery.registerMock("react-native-svg", require("./react-native-svg-mock"));

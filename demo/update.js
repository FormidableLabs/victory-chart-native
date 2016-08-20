const fs = require('fs-extra');

fs.removeSync('./node_modules/victory-chart-native/lib');
fs.copySync('../lib', './node_modules/victory-chart-native/lib');


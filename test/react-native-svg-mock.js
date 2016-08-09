import React from "react";

// Create a vanilla SVG component
function createComponent(name) {
  return React.createClass({
    displayName: name,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      var type = name[0].toLowerCase() + name.substr(1);
      return React.createElement(type, this.props, this.props.children)
    }
  });
}

// Mock all react-native-svg exports
var Svg = createComponent("Svg");
var Circle = createComponent("Circle");
var Ellipse = createComponent("Ellipse");
var G = createComponent("G");
var Text = createComponent("Text");
var Path = createComponent("Path");
var Polygon = createComponent("Polygon");
var Polyline = createComponent("Polyline");
var Line = createComponent("Line");
var Rect = createComponent("Rect");
var Use = createComponent("Use");
var Image = createComponent("Image");
var Symbol = createComponent("Symbol");
var Defs = createComponent("Defs");
var LinearGradient = createComponent("LinearGradient");
var RadialGradient = createComponent("RadialGradient");
var Stop = createComponent("Stop");
var ClipPath = createComponent("ClipPath");

export {
  Svg,
  Circle,
  Ellipse,
  G,
  Text,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath
};

export default Svg;
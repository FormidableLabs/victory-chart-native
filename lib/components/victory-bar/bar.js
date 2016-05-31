import React from "react";
import { Path } from "react-native-svg";
import Bar from "victory-chart/src/components/victory-bar/bar";

export default class extends Bar {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderBar(path) {
    const {fill, opacity, fillOpacity} = this.props.style;
    return (
      <Path
        {...this.props.events}
        d={path}
        fill={fill}
        opacity={opacity || fillOpacity}
        {...this.getStrokeStyles(this.props.style)}
        shapeRendering="optimizeSpeed"
      />
    );
  }
}

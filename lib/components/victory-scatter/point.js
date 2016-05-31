import React from "react";
import { Path } from "react-native-svg";
import Point from "victory-chart/src/components/victory-scatter/point";

export default class extends Point {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  render() {
    const {style} = this.props;
    return (
      <Path
        d={this.getPath(this.props)}
        fill={style.fill}
        opacity={style.opacity || style.fillOpacity}
        shapeRendering="optimizeSpeed"
        {...this.getStrokeStyles(style)}
        {...this.props.events}
      />
    );
  }
}

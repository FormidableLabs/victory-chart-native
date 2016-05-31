import React from "react";
import { Path } from "react-native-svg";
import LineSegment from "victory-chart/src/components/victory-line/line-segment";

export default class extends LineSegment {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderLine(style, path) {
    return (
      <Path
        d={path}
        fill={style.fill}
        {...this.getStrokeStyles(style)}
      />
    );
  }
}

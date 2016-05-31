import React from "react";
import { Line } from "react-native-svg";
import AxisLine from "victory-chart/src/components/victory-axis/axis-line";

export default class extends AxisLine {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderAxisLine({x1, x2, y1, y2, style, events}) {
    return (
      <Line
        x1={x1 || 0}
        y1={y1 || 0}
        x2={x2 || 0}
        y2={y2 || 0}
        {...this.getStrokeStyles(style)}
        {...events}
      />
    );
  }
}

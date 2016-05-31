import React, { PropTypes } from "react";
import { Line } from "react-native-svg";
import Tick from "victory-chart/src/components/victory-axis/tick";

export default class extends Tick {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderTick({x1, x2, y1, y2, style, events}) {
    return (
      <Line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        style={style}
        {...this.getStrokeStyles(style)}
        {...events}
      />
    );
  }
}

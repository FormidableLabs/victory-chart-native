import React from "react";
import { G, Line } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import ErrorBar from "victory-chart/src/components/victory-errorbar/errorbar";

export default class extends ErrorBar {
  renderErrorBar(error) {
    const {
      x,
      y,
      borderWidth,
      style,
      events
    } = this.props;

    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <G>
        <Line
          ref="borderRight"
          {...events}
          {...nativeStyle}
          x1={error.errorRight}
          x2={error.errorRight}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        <Line
          ref="borderLeft"
          {...events}
          {...nativeStyle}
          x1={error.errorLeft}
          x2={error.errorLeft}
          y1={y - borderWidth}
          y2={y + borderWidth}
        />
        <Line
          ref="borderBottom"
          {...events}
          {...nativeStyle}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorBottom}
          y2={error.errorBottom}
        />
        <Line
          ref="borderTop"
          {...events}
          {...nativeStyle}
          x1={x - borderWidth}
          x2={x + borderWidth}
          y1={error.errorTop}
          y2={error.errorTop}
        />
        <Line
          ref="crossTop"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorTop}
          shapeRendering="optimizeSpeed"
        />
        <Line
          ref="crossBottom"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={x}
          y1={y}
          y2={error.errorBottom}
          shapeRendering="optimizeSpeed"
        />
        <Line
          ref="crossLeft"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={error.errorLeft}
          y1={y}
          y2={y}
          shapeRendering="optimizeSpeed"
        />
        <Line
          ref="crossRight"
          {...events}
          {...nativeStyle}
          x1={x}
          x2={error.errorRight}
          y1={y}
          y2={y}
          shapeRendering="optimizeSpeed"
        />
      </G>
    );
  }
}

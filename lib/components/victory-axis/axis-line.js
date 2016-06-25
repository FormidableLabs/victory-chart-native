import React from "react";
import { Line } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import AxisLine from "victory-chart/src/components/victory-axis/axis-line";

export default class extends AxisLine {
  renderAxisLine(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Line {...props} {...nativeStyle} {...events}/>;
  }
}

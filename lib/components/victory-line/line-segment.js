import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import LineSegment from "victory-chart/src/components/victory-line/line-segment";

export default class extends LineSegment {
  renderLine(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}

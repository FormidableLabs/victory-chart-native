import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import Bar from "victory-chart/src/components/victory-bar/bar";

export default class extends Bar {
  renderBar(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}

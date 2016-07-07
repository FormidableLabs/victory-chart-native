import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import Area from "victory-chart/src/components/victory-area/area";

export default class extends Area {

  renderArea(path, style, events) {
    const areaStroke = style.stroke ? "none" : style.fill;
    const areaStyle = Object.assign({}, style, {stroke: areaStroke});
    const nativeStyle = NativeHelpers.getStyle(areaStyle);
    return <Path key="area" {...nativeStyle} d={path} {...events}/>;
  }

  renderLine(path, style, events) {
    if (!style.stroke || style.stroke === "none" || style.stroke === "transparent") {
      return undefined;
    }
    const lineStyle = Object.assign({}, style, {fill: "none"});
    const nativeStyle = NativeHelpers.getStyle(lineStyle);
    return (
      <Path key="area-stroke" {...nativeStyle} d={path} {...events}/>
    );
  }
}

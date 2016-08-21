import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "victory-core-native";
import { VictoryArea } from "victory-chart/src";
import Area from "./area";
import ClipPath from "../helpers/clip-path";

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area/>,
    labelComponent: <VictoryLabel/>,
    clipPathComponent: <ClipPath/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}

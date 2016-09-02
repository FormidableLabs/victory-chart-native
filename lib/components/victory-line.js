import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLine } from "victory-chart/src";
import { VictoryLabel, VictoryContainer, ClipPath, Curve } from "victory-core-native";

export default class extends VictoryLine {
  static defaultProps = {
    ...VictoryLine.defaultProps,
    dataComponent: <Curve/>,
    labelComponent: <VictoryLabel/>,
    clipPathComponent: <ClipPath/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}

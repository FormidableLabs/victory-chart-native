import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLine } from "victory-chart/src";
import LineSegment from "./line-segment";
import { VictoryLabel, VictoryContainer } from "victory-core-native";

export default class extends VictoryLine {
  static defaultProps = {
    ...VictoryLine.defaultProps,
    dataComponent: <LineSegment/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  };
}

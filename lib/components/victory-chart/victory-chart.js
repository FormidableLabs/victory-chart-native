import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryContainer } from "victory-core-native";
import { VictoryChart } from "victory-chart/src";

export default class extends VictoryChart {
  static defaultProps = {
    ...VictoryChart.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  };
}

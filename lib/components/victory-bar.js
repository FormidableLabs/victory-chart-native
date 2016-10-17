import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer, Bar } from "victory-core-native";
import { VictoryBar } from "victory-chart/src";

export default class extends VictoryBar {
  static defaultProps = {
    ...VictoryBar.defaultProps,
    dataComponent: <Bar/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}

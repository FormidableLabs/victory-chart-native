import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "victory-core-native";
import { VictoryBar } from "victory-chart/src";
import Bar from "./bar";
import ClipPath from "../helpers/clip-path";


export default class extends VictoryBar {
  static defaultProps = {
    ...VictoryBar.defaultProps,
    dataComponent: <Bar/>,
    labelComponent: <VictoryLabel/>,
    clipPathComponent: <ClipPath/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}

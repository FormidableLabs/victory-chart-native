import React from "react";
import { Dimensions } from "react-native";
import { ClipPath, G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "victory-core-native";
import { VictoryScatter } from "victory-chart/src";
import Point from "./point";

export default class extends VictoryScatter {
  static defaultProps = {
    ...VictoryScatter.defaultProps,
    dataComponent: <Point/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}

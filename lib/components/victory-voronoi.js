import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryVoronoi } from "victory-chart/src";
import { VictoryLabel, VictoryContainer, Voronoi } from "victory-core-native";

export default class extends VictoryVoronoi {
  static defaultProps = {
    ...VictoryVoronoi.defaultProps,
    dataComponent: <Voronoi/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}

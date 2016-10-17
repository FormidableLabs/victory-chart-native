import React from "react";
import { Dimensions } from "react-native";
import { VictoryLabel, VictoryContainer, Area, VictoryClipContainer } from "victory-core-native";
import { VictoryArea } from "victory-chart/src";

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <VictoryClipContainer/>,
    width: Dimensions.get("window").width
  }
}

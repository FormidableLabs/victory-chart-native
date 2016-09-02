import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer, Candle } from "victory-core-native";
import { VictoryCandlestick } from "victory-chart/src";

export default class extends VictoryCandlestick {
  static defaultProps = {
    ...VictoryCandlestick.defaultProps,
    dataComponent: <Candle/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}

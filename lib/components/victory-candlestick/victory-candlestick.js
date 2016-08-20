import React from "react";
import { Dimensions } from "react-native";
import { ClipPath, G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "victory-core-native";
import { VictoryCandlestick } from "victory-chart/src";
import Candle from "./candle";

export default class extends VictoryCandlestick {
  static defaultProps = {
    ...VictoryCandlestick.defaultProps,
    clipPathComponent: <ClipPath/>,
    dataComponent: <Candle/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}

import React from "react";
import { Line, Rect } from "react-native-svg";
import { NativeHelpers } from "victory-core-native";
import Candle from "victory-chart/src/components/victory-candlestick/candle";

export default class extends Candle {
  renderWick(props) {
    const { style, events } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Line {...props} {...nativeStyle} {...events}/>;
  }

  renderCandle(props) {
    const { style, events } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Rect {...props} {...nativeStyle} {...events}/>;
  }
};

import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLabel } from "victory-core-native";
import VictoryBar from "victory-chart/src/components/victory-bar/victory-bar";
import Bar from "./bar";

export default class extends VictoryBar {
  static defaultProps = {
    ...VictoryBar.defaultProps,
    dataComponent: <Bar />,
    labelComponent: <VictoryLabel />,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  }

  renderBar(key, barComponent, barLabel) {
    return (
      <G key={`bar-group-${key}`}>
        {barComponent}
        {barLabel}
      </G>
    );
  }

  renderGroup(style) {
    return <G style={style.parent}>{this.renderData(this.props)}</G>;
  }

  renderStandalone(style, group) {
    return (
      <Svg
        width={this.props.width}
        height={this.props.height}
        preserveAspectRatio={this.props.preserveAspectRatio}
        viewbox={`0 0 ${this.props.width} ${this.props.height}`}
      >
        {group}
      </Svg>
    );
  }
}

import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLabel } from "victory-core-native";
import VictoryScatter from "victory-chart/src/components/victory-scatter/victory-scatter";
import Point from "./point";

export default class extends VictoryScatter {
  static defaultProps = {
    ...VictoryScatter.defaultProps,
    dataComponent: <Point />,
    labelComponent: <VictoryLabel />,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  };

  renderScatter(key, scatterComponent, scatterLabel) {
    return (
      <G key={`scatter-group-${key}`}>
        {scatterComponent}
        {scatterLabel}
      </G>
    );
  }

  renderGroup(style) {
    return (
      <G style={style.parent}>
        {this.renderData(this.props)}
      </G>
    );
  }

  renderStandalone(style, group) {
    return (
      <Svg
        width={this.props.width}
        height={this.props.height}
        preserveAspectRatio={this.props.preserveAspectRatio}
        viewBox={`0 0 ${this.props.width} ${this.props.height}`}
      >
        {group}
      </Svg>
    );
  }
}

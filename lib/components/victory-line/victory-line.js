import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLine } from "victory-chart/src";
import LineSegment from "./line-segment";
import { VictoryLabel } from "victory-core-native";

export default class extends VictoryLine {
  static defaultProps = {
    ...VictoryLine.defaultProps,
    dataComponent: <LineSegment />,
    labelComponent: <VictoryLabel />,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  };

  renderLine(key, lineComponent, lineLabel) {
    return (
      <G key={`line-group-${key}`}>
        {lineComponent}
        {lineLabel}
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
        viewbox={`0 0 ${this.props.width} ${this.props.height}`}
      >
        {group}
      </Svg>
    );
  }
}

import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLabel } from "victory-core-native";
import VictoryArea from "victory-chart/src/components/victory-area/victory-area";
import Area from "./area";

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area />,
    labelComponent: <VictoryLabel />,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  }

  renderArea(areaComponent, areaLabel) {
    return (
      <G>
        {areaComponent}
        {areaLabel}
      </G>
    );
  }

  renderGroup(style) {
    return <G style={style}>{this.renderData(this.props)}</G>;
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

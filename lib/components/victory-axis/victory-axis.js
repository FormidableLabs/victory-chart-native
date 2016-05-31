import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLabel } from "victory-core-native";
import AxisHelpers from "victory-chart/src/components/victory-axis/helper-methods";
import VictoryAxis from "victory-chart/src/components/victory-axis/victory-axis";
import AxisLine from "./axis-line";
import GridLine from "./grid";
import Tick from "./tick";

export default class extends VictoryAxis {
  static defaultProps = {
    ...VictoryAxis.defaultProps,
    axisComponent: <AxisLine />,
    axisLabelComponent: <VictoryLabel />,
    tickLabelComponent: <VictoryLabel />,
    tickComponent: <Tick />,
    gridComponent: <GridLine />,
    preserveAspectRatio: "none",
    width: Dimensions.get("window").width
  };

  renderTick({key, TickComponent, TickLabel, GridComponent}) {
    return (
      <G key={`tick-group-${key}`}>
        {TickComponent}
        {TickLabel}
        {GridComponent}
      </G>
    );
  }

  renderGroup(style, calculatedValues) {
    const translate = AxisHelpers.getTranslate(this.props, calculatedValues);
    return (
      <G x={translate[0]} y={translate[1]}>
        {this.renderGridAndTicks(this.props)}
        {this.renderLine(this.props)}
        {this.renderLabel(this.props)}
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

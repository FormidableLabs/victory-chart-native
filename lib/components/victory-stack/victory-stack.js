import React from "react";
import Svg, { G } from "react-native-svg";
import VictoryStack from "victory-chart/src/components/victory-stack/victory-stack";

export default class extends VictoryStack {
  static defaultProps = {
    ...VictoryStack.defaultProps,
    preserveAspectRatio: "none"
  };

  renderGroup(style, newChildren) {
    return (
      <G style={style.parent}>
        {newChildren}
      </G>
    );
  }

  renderStandalone(style, props, group) {
    return (
      <Svg
        width={props.width}
        height={props.height}
        preserveAspectRatio={this.props.preserveAspectRatio}
        viewbox={`0 0 ${props.width} ${props.height}`}
      >
        {group}
      </Svg>
    );
  }
}

import React from "react";
import { G, Path } from "react-native-svg";
import Area from "victory-chart/src/components/victory-area/area";

export default class extends Area {
  getStrokeStyles(style) {
    return style.stroke === "none" || style.stroke === "transparent"
      ? {}
      : ({stroke, strokeWidth, strokeOpacity, strokeDasharray,
          strokeDashoffset, strokeLinecap, strokeLinejoin} = style)
  }

  renderAreaShape(areaStyle, path, events) {
    return (
      <Path
        d={path}
        fill={areaStyle.fill}
        opacity={areaStyle.opacity || areaStyle.fillOpacity}
        {...this.getStrokeStyles(areaStyle)}
        {...events}
      />
    );
  }

  renderLineShape(lineStyle, path, events) {
    return (
      <Path
        d={path}
        fill={lineStyle.fill}
        opacity={lineStyle.opacity || lineStyle.fillOpacity}
        {...this.getStrokeStyles(lineStyle)}
        {...events}
      />
    );
  }

  renderGroup(style, interpolation, events) {
    return (
      <G>
        {this.renderArea(style, interpolation, events)}
        {this.renderLine(style, interpolation, events)}
      </G>
    );
  }
}

import React from "react";
import { ClipPath as Clip, Rect, Defs } from "react-native-svg";
import ClipPath from "victory-chart/src/components/helpers/clip-path";

export default class extends ClipPath {
  renderClipPath(props, id) {
    return (
      <Defs>
        <Clip id={`${id}`}>
          <Rect {...props}/>
        </Clip>
      </Defs>
    );
  }
}

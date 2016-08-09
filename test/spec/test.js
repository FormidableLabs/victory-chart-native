import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import VictoryArea from "../../lib/components/victory-area/victory-area";
import VictoryAxis from "../../lib/components/victory-axis/victory-axis";
import VictoryBar from "../../lib/components/victory-bar/victory-bar";
import VictoryGroup from "../../lib/components/victory-group/victory-group";
import VictoryLine from "../../lib/components/victory-line/victory-line";
import VictoryScatter from "../../lib/components/victory-scatter/victory-scatter";
import VictoryStack from "../../lib/components/victory-stack/victory-stack";
import VictoryChart from "../../lib/components/victory-chart/victory-chart";
import VictoryErrorBar from "../../lib/components/victory-errorbar/victory-errorbar";
import VictoryCandlestick from "../../lib/components/victory-candlestick/victory-candlestick";

const components = [
  { component: VictoryArea, name: "VictoryArea" },
  { component: VictoryAxis, name: "VictoryAxis" },
  { component: VictoryBar, name: "VictoryBar" },
  { component: VictoryGroup, name: "VictoryGroup" },
  { component: VictoryLine, name: "VictoryLine" },
  { component: VictoryScatter, name: "VictoryScatter" },
  { component: VictoryStack, name: "VictoryStack" },
  { component: VictoryChart, name: "VictoryChart" },
  { component: VictoryErrorBar, name: "VictoryErrorBar" },
  { component: VictoryCandlestick, name: "VictoryCandlestick" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});

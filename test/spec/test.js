import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import VictoryArea from "../../lib/components/victory-area";
import VictoryAxis from "../../lib/components/victory-axis";
import VictoryBar from "../../lib/components/victory-bar";
import VictoryGroup from "../../lib/components/victory-group";
import VictoryLine from "../../lib/components/victory-line";
import VictoryScatter from "../../lib/components/victory-scatter";
import VictoryStack from "../../lib/components/victory-stack";
import VictoryChart from "../../lib/components/victory-chart";
import VictoryErrorBar from "../../lib/components/victory-errorbar";
import VictoryCandlestick from "../../lib/components/victory-candlestick";
import VictoryVoronoi from "../../lib/components/victory-voronoi";
import VictoryVoronoiTooltip from "../../lib/components/victory-voronoi-tooltip";

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
  { component: VictoryCandlestick, name: "VictoryCandlestick" },
  { component: VictoryVoronoi, name: "VictoryVoronoi" },
  { component: VictoryVoronoiTooltip, name: "VictoryVoronoiTooltip" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});

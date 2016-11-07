/*eslint-disable no-magic-numbers*/

import React from "react";
import { View, PanResponder, StyleSheet, Dimensions } from "react-native";
import { VictoryZoom } from "victory-chart/src";
import { VictoryClipContainer } from "victory-core-native";
import ZoomHelpers from "victory-chart/src/components/victory-zoom/helper-methods";
//Perf from "react-addons-perf";
import {sortedIndexBy} from "lodash";
const styles = StyleSheet.create({
  responder: {
    flex: 1,
    alignItems: "center"
  }
});

export default class extends VictoryZoom {

  static defaultProps = {
    ...VictoryZoom.defaultProps,
    clipContainerComponent: <VictoryClipContainer />
  }

  constructor(props) {
    super(props);
    this.panResponder = this.getResponder();
  }

  // override default VictoryZoom events, we will handle touches
  // via a PanResponder instead. See getResponder() below
  getEvents() {
    return [];
  }

  // configure a PanResponder
  getResponder() {
    const yes = () => true;
    const no = () => false;
    return PanResponder.create({
      onStartShouldSetPanResponder: yes,

      onStartShouldSetPanResponderCapture: no,

      onMoveShouldSetPanResponder: yes,

      onMoveShouldSetPanResponderCapture: yes,

      onShouldBlockNativeResponder: yes,

      onPanResponderTerminationRequest: yes,
      // User has started a touch move
      onPanResponderGrant: this.handleResponderGrant.bind(this),
      // Active touch or touches have moved
      onPanResponderMove: this.handleResponderMove.bind(this),
      // The user has released all touches
      onPanResponderRelease: this.handleResponderEnd.bind(this),
      // Another component has become the responder
      onPanResponderTerminate: this.handleResponderEnd.bind(this)
    });
  }

  handleResponderGrant() {
    //Perf.start();
    this.targetBounds = {left: 0, width: 350}; //this.chartRef.getSvgBounds();
    this.lastDomain = this.previousDomain = this.state.domain;
    this.isPanning = true;
  }

  handleResponderMove(evt, gestureState) {
    const { touches } = evt.nativeEvent;
    if (touches && touches.length === 2) {
      this.handlePinchZoom(touches[0].locationX, touches[1].locationX);
    } else if (this.isPanning) {
      this.handlePan(gestureState.dx);
    }
  }

  handleResponderEnd() {
    //Perf.stop();
    //Perf.getLastMeasurements());
    this.isPanning = false;
    this.pinchState = null;
  }

  handlePinchZoom(x1, x2) {
    const currentDistance = Math.abs(x1 - x2);
    const pinchState = this.pinchState || (this.pinchState = {
      initialDomain: this.lastDomain,
      initialDistance: currentDistance
    });

    const windowWidth = Dimensions.get("window").width;
    const distanceDelta = currentDistance - pinchState.initialDistance;
    const scaleFactor = 1 - (distanceDelta / windowWidth);
    const nextXDomain = ZoomHelpers.scale(
      pinchState.initialDomain.x,
      this.getDataDomain().x,
      scaleFactor
    );
    this.updateXDomain(nextXDomain);
  }

  handlePan(deltaX) {
    const calculatedDx = -(deltaX / this.getDomainScale());
    const nextXDomain = ZoomHelpers.pan(
      this.lastDomain.x,
      this.getDataDomain().x,
      calculatedDx
    );
    this.updateXDomain(nextXDomain);
  }

  updateXDomain(nextXDomain) {
    const domain = {x: nextXDomain};
    this.previousDomain = domain;
    this.setState({domain});
  }

  clipDataComponents(children, props) {
    const components = super.clipDataComponents(children, props);

    if (this.props.linear) {
      const [data, ...axes] = components;
      return [dropOutOfBound(data, ...this.state.domain.x), ...axes];
    } else {
      return components;
    }
  }

  renderChart(chartElement, props) {
    return (
      <View {...this.panResponder.panHandlers} style={styles.responder}>
        {React.cloneElement(chartElement, props)}
      </View>
    );
  }
}

const dropOutOfBound = (component, xmin, xmax) => {
  let children = component.props.children;
  let data = component.props.data;
  let changed = false;

  // recurse
  if (children) {
    changed = true;
    children = React.Children.map(children, (child) => dropOutOfBound(child, xmin, xmax));
  }

  // cap children at x domain bounds
  if (data) {
    changed = true;
    data = data.slice(
      Math.max(sortedIndexBy(data, { x: xmin }, (item) => item.x) - 1, 0),
      Math.min(sortedIndexBy(data, { x: xmax }, (item) => item.x) + 1, data.length - 1)
    );
  }

  if (changed) {
    return React.cloneElement(component, {...component.props, data}, children);
  }

  return component;
};
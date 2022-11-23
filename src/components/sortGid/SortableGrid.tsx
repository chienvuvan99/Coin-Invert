import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
  Image,
  View,
} from 'react-native';

import _ from 'lodash';

const ITEMS_PER_ROW = 4;
const DRAG_ACTIVATION_TRESHOLD = 200; // Milliseconds
const BLOCK_TRANSITION_DURATION = 300; // Milliseconds
const ACTIVE_BLOCK_CENTERING_DURATION = 200; // Milliseconds
const DOUBLETAP_TRESHOLD = 150; // Milliseconds
const NULL_FN = () => {};

const SortableGrid = () => {
  const dic = useRef({
    blockTransitionDuration: BLOCK_TRANSITION_DURATION,
    activeBlockCenteringDuration: ACTIVE_BLOCK_CENTERING_DURATION,
    itemsPerRow: ITEMS_PER_ROW,
    dragActivationTreshold: DRAG_ACTIVATION_TRESHOLD,
    doubleTapTreshold: DOUBLETAP_TRESHOLD,
    onDragRelease: NULL_FN,
    onDragStart: NULL_FN,
    dragStartAnimation: null,
    rows: null,
    dragPosition: null,
    activeBlockOffset: null,
    blockWidth: null,
    blockHeight: null,
    itemWidth: null,
    itemHeight: null,
    gridHeightTarget: null,
    ghostBlocks: [],
    itemOrder: [],
    panCapture: false,
    items: [],
    initialLayoutDone: false,
    initialDragDone: false,

    tapTimer: null,
    tapIgnore: false,
    doubleTapWait: false,
  });

  const startDragWiggle = useRef(new Animated.Value(0));
  const gridHeight = useRef(new Animated.Value(0));

  const [gridLayout, setGridLayout] = useState(null);
  const [blockPositions, setBlockPositions] = useState([]);
  const [activeBlock, setActiveBlock] = useState(null);
  const [blockWidth, setBlockWidth] = useState(null);
  const [blockHeight, setBlockHeight] = useState(null);
  const [blockPositionsSetCount, setBlockPositionsSetCount] = useState(0);
  const [deletionSwipePercent, setDeletionSwipePercent] = useState(0);

  useEffect(() => {}, []);
  return (
    <Animated.View style={_getGridStyle()} onLayout={assessGridSize}>
      {state.gridLayout &&
        items.map((item, key) => (
          <Block
            key={key}
            style={_getBlockStyle(key)}
            onLayout={saveBlockPositions(key)}
            panHandlers={_panResponder.panHandlers}
            delayLongPress={dragActivationTreshold}
            onLongPress={activateDrag(key)}
            onPress={handleTap(item.props)}
            itemWrapperStyle={_getItemWrapperStyle(key)}
            inactive={item.props.inactive}>
            {item}
          </Block>
        ))}
    </Animated.View>
  );
};

export default SortableGrid;

const styles = StyleSheet.create({});

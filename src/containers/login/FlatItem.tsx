import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  PanResponder,
  ViewStyle,
  StyleProp,
  PanResponderGestureState,
  GestureResponderEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface IOnLayoutEvent {
  nativeEvent: {layout: {x: number; y: number; width: number; height: number}};
}

interface IBaseItemType {
  key: string | number;
  disabledDrag?: boolean;
  disabledReSorted?: boolean;
}

export interface IDraggableGridProps<DataType extends IBaseItemType> {
  numColumns: number;
  data: DataType[];
  renderItem: (item: DataType, order: number) => React.ReactElement<any>;
  style?: ViewStyle;
  itemHeight?: number;
  dragStartAnimation?: StyleProp<any>;
  onItemPress?: (item: DataType) => void;
  onDragStart?: (item: DataType) => void;
  onDragging?: (gestureState: PanResponderGestureState) => void;
  onDragRelease?: (newSortedData: DataType[]) => void;
  onResetSort?: (newSortedData: DataType[]) => void;
  delayLongPress?: number;
}
interface IMap<T> {
  [key: string]: T;
}
interface IPositionOffset {
  x: number;
  y: number;
}
interface IOrderMapItem {
  order: number;
}
interface IItem<DataType> {
  key: string | number;
  itemData: DataType;
  currentPosition: Animated.AnimatedValueXY;
}
let activeBlockOffset = {x: 0, y: 0};

const FlatItem = <DataType extends IBaseItemType>({item}: any) => {
  const [blockPositions] = useState<IPositionOffset[]>([]);
  const [orderMap] = useState<IMap<IOrderMapItem>>({});
  const [itemMap] = useState<IMap<DataType>>({});
  const [items] = useState<IItem<DataType>[]>([]);
  const [blockHeight, setBlockHeight] = useState(0);
  const [blockWidth, setBlockWidth] = useState(0);
  const [gridHeight] = useState<Animated.Value>(new Animated.Value(0));
  const [hadInitBlockSize, setHadInitBlockSize] = useState(false);
  const [dragStartAnimatedValue] = useState(new Animated.Value(1));
  const [gridLayout, setGridLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [activeItemIndex, setActiveItemIndex] = useState<undefined | number>();

  // Func

  function getActiveItem() {
    if (activeItemIndex === undefined) return false;
    return items[activeItemIndex];
  }
  function getDistance(
    startOffset: IPositionOffset,
    endOffset: IPositionOffset,
  ) {
    const xDistance = startOffset.x + activeBlockOffset.x - endOffset.x;
    const yDistance = startOffset.y + activeBlockOffset.y - endOffset.y;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  const onPress = () => {};
  const onLongPress = () => {};
  const onStartDrag = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    console.info('onStartDrag', gestureState);
    const activeItem = getActiveItem();
    if (!activeItem) return false;
    const {x0, y0, moveX, moveY} = gestureState;
    const activeOrigin = blockPositions[orderMap[activeItem.key].order];
    const x = activeOrigin.x - x0;
    const y = activeOrigin.y - y0;
    activeItem.currentPosition.setOffset({
      x,
      y,
    });
    activeBlockOffset = {
      x,
      y,
    };
    activeItem.currentPosition.setValue({
      x: moveX,
      y: moveY,
    });
    const xChokeAmount = Math.max(
      0,
      activeBlockOffset.x + moveX - (gridLayout.width - blockWidth),
    );
    const xMinChokeAmount = Math.min(0, activeBlockOffset.x + moveX);

    const dragPosition = {
      x: moveX - xChokeAmount - xMinChokeAmount,
      y: moveY,
    };
    const originPosition = blockPositions[orderMap[activeItem.key].order];
    const dragPositionToActivePositionDistance = getDistance(
      dragPosition,
      originPosition,
    );
    activeItem.currentPosition.setValue(dragPosition);

    let closetItemIndex = activeItemIndex as number;
    let closetDistance = dragPositionToActivePositionDistance;
  };
  const onHandMove = (
    _: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    console.info('onHandMove', gestureState);
    const activeItem = getActiveItem();
    if (!activeItem) return false;
    const {moveX, moveY} = gestureState;
  };
  const onHandRelease = () => {
    console.info('onHandRelease');
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onShouldBlockNativeResponder: () => false,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: onStartDrag,
      onPanResponderMove: onHandMove,
      onPanResponderRelease: onHandRelease,
    }),
  ).current;
  return (
    <Animated.View {...panResponder.panHandlers}>
      <Animated.View style={[styles.item]}>
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
          <Text>{item.id}</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default FlatItem;

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    backgroundColor: '#5715',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

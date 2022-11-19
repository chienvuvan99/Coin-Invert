import {
  View,
  Text,
  Animated,
  FlatList,
  Dimensions,
  PanResponder,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SortableGrid from '../../components/dragg/index';
// import SortableGrid from 'react-native-sortable-grid';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Home = () => {
  const refFlatList = useRef(new Map());
  const pan = useRef<any>(new Animated.ValueXY()).current;

  const [data, setdata] = useState<Array<number>>(
    Array(33)
      .fill()
      .map((_, i) => i),
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  const renderItem = ({item, index}: any) => {
    return (
      <Animated.View
        style={{
          width: windowWidth / 3 - 8,
          height: windowWidth / 3 - 8,
          borderRadius: 8,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 4,
        }}
        {...panResponder.panHandlers}
        key={index.toString()}>
        <Text style={{fontSize: 40, color: '#FFFFFF'}}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    // <Animated.View
    //   style={{
    //     transform: [{translateX: pan.x}, {translateY: pan.y}],
    //   }}
    //   {...panResponder.panHandlers}>
    //   <View
    //     style={{
    //       height: 150,
    //       width: 150,
    //       backgroundColor: 'blue',
    //       borderRadius: 5,
    //     }}
    //   />
    // </Animated.View>
    // <View>
    //   <FlatList
    //     data={data}
    //     numColumns={3}
    //     renderItem={renderItem}
    //     keyExtractor={(item, index) => index.toString()}
    //   />
    // </View>
    <SortableGrid
      blockTransitionDuration={400}
      activeBlockCenteringDuration={200}
      itemsPerRow={3}
      onDragRelease={itemOrder =>
        console.log(
          'Drag was released, the blocks are in the following order: ',
          itemOrder,
        )
      }
      onDragStart={() => console.log('Some block is being dragged now!')}>
      {['a', 'b', 'c', 'd', 'e'].map((letter, index) => (
        <View
          style={{
            height: windowWidth / 3,
            width: windowWidth / 3,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 4,
            borderWidth: 1,
          }}
          key={index}
          onTap={() => console.log('Item number:', index, 'was tapped!')}>
          <Text style={{fontSize: 32, color: 'white'}}>{letter}</Text>
        </View>
      ))}
    </SortableGrid>
  );
};

export default Home;

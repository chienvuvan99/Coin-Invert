import React, {useRef, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
  HALF_LEFT: 0,
  HALF_CENTER: 1,
  HALF_RIGHT: 2,
};

let containerCount = 0;

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const _generateArray = (n: number) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
};

const TestUi = () => {
  const [data, setData] = useState(_generateArray(300));
  const dataProvider = useRef(
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data),
  ).current;

  const _layoutProvider = useRef(
    new LayoutProvider(
      index => {
        if (index % 3 === 0) {
          return ViewTypes.HALF_LEFT;
        } else if (index % 3 === 1) {
          return ViewTypes.HALF_CENTER;
        } else {
          return ViewTypes.HALF_RIGHT;
        }
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.HALF_LEFT:
            dim.width = windowWidth / 3;
            dim.height = 102;
            break;
          case ViewTypes.HALF_CENTER:
            dim.width = windowWidth / 3;
            dim.height = 102;
            break;
          case ViewTypes.HALF_RIGHT:
            dim.width = windowWidth / 3;
            dim.height = 102;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    ),
  ).current;

  const _rowRenderer = (type: any, data: any, index: any) => {
    switch (type) {
      case ViewTypes.HALF_LEFT:
        return (
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 1,
              backgroundColor: '#ffbb00',
              borderWidth: 1,
            }}>
            <Text>LEFT: {data}</Text>
          </View>
        );
      case ViewTypes.HALF_CENTER:
        return (
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 1,
              borderWidth: 1,
              backgroundColor: 'red',
            }}>
            <Text>CENTER: {data}</Text>
          </View>
        );
      case ViewTypes.HALF_RIGHT:
        return (
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 1,
              borderWidth: 1,
              backgroundColor: '#7cbb00',
            }}>
            <Text>RIGHT: {data}</Text>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={{flex: 1}}>
      <RecyclerListView
        layoutProvider={_layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={_rowRenderer}
      />
    </View>
  );
};

export default TestUi;

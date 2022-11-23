// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import FlatItem from './FlatItem';

// let data = [
//   {key: 1, id: 1},
//   {key: 2, id: 2},
//   {key: 3, id: 3},
//   {key: 4, id: 4},
// ];
// const Login = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//         scrollEventThrottle={16}
//         data={data}
//         numColumns={3}
//         ListHeaderComponent={() => <View style={styles.dropzone} />}
//         renderItem={props => <FlatItem {...props} />}
//         style={{flex: 1}}
//       />
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   dropzone: {
//     height: 20,
//   },
// });

const data = [
  {
    key: 'zero',
    itemData: {
      name: '0',
      key: 'zero',
    },
    currentPosition: {
      x: 0,
      y: 0,
    },
  },
  {
    key: 'one',
    itemData: {
      name: '1',
      key: 'one',
    },
    currentPosition: {
      x: 131,
      y: 0,
    },
  },
  {
    key: 'two',
    itemData: {
      name: '2',
      key: 'two',
    },
    currentPosition: {
      x: 262,
      y: 0,
    },
  },
  {
    key: 'three',
    itemData: {
      name: '3',
      key: 'three',
    },
    currentPosition: {
      x: 0,
      y: 131,
    },
  },
  {
    key: 'four',
    itemData: {
      name: '4',
      key: 'four',
    },
    currentPosition: {
      x: 131,
      y: 131,
    },
  },
  {
    key: 'five',
    itemData: {
      name: '5',
      key: 'five',
    },
    currentPosition: {
      x: 262,
      y: 131,
    },
  },
  {
    key: 'six',
    itemData: {
      name: '6',
      key: 'six',
    },
    currentPosition: {
      x: 0,
      y: 262,
    },
  },
  {
    key: 'seven',
    itemData: {
      name: '7',
      key: 'seven',
    },
    currentPosition: {
      x: 131,
      y: 262,
    },
  },
  {
    key: 'eight',
    itemData: {
      name: '8',
      key: 'eight',
    },
    currentPosition: {
      x: 262,
      y: 262,
    },
  },
  {
    key: 'night',
    itemData: {
      name: '9',
      key: 'night',
    },
    currentPosition: {
      x: 0,
      y: 393,
    },
  },
  {
    key: 'zero0',
    itemData: {
      name: '10',
      key: 'zero0',
    },
    currentPosition: {
      x: 131,
      y: 393,
    },
  },
  {
    key: 'one1',
    itemData: {
      name: '11',
      key: 'one1',
    },
    currentPosition: {
      x: 262,
      y: 393,
    },
  },
  {
    key: 'two2',
    itemData: {
      name: '12',
      key: 'two2',
    },
    currentPosition: {
      x: 0,
      y: 524,
    },
  },
  {
    key: 'three3',
    itemData: {
      name: '13',
      key: 'three3',
    },
    currentPosition: {
      x: 131,
      y: 524,
    },
  },
  {
    key: 'four4',
    itemData: {
      name: '14',
      key: 'four4',
    },
    currentPosition: {
      x: 262,
      y: 524,
    },
  },
  {
    key: 'five5',
    itemData: {
      name: '15',
      key: 'five5',
    },
    currentPosition: {
      x: 0,
      y: 655,
    },
  },
  {
    key: 'six6',
    itemData: {
      name: '16',
      key: 'six6',
    },
    currentPosition: {
      x: 131,
      y: 655,
    },
  },
  {
    key: 'seven7',
    itemData: {
      name: '17',
      key: 'seven7',
    },
    currentPosition: {
      x: 262,
      y: 655,
    },
  },
  {
    key: 'eight8',
    itemData: {
      name: '18',
      key: 'eight8',
    },
    currentPosition: {
      x: 0,
      y: 786,
    },
  },
  {
    key: 'night9',
    itemData: {
      name: '19',
      key: 'night9',
    },
    currentPosition: {
      x: 131,
      y: 786,
    },
  },
];
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DraggableGrid} from '../../components/dragg';

const App = () => {
  const [data, setData] = useState([
    {name: '0', key: 'zero'},
    {name: '1', key: 'one'},
    {name: '2', key: 'two'},
    {name: '3', key: 'three'},
    {name: '4', key: 'four'},
    {name: '5', key: 'five'},
    {name: '6', key: 'six'},
    {name: '7', key: 'seven'},
    {name: '8', key: 'eight'},
    {name: '9', key: 'night'},
    {name: '10', key: 'zero0'},
    {name: '11', key: 'one1'},
    {name: '12', key: 'two2'},
    {name: '13', key: 'three3'},
    {name: '14', key: 'four4'},
    {name: '15', key: 'five5'},
    {name: '16', key: 'six6'},
    {name: '17', key: 'seven7'},
    {name: '18', key: 'eight8'},
    {name: '19', key: 'night9'},
  ]);
  const render_item = (item: {name: string; key: string}) => {
    return (
      <View
        style={{
          width: Dimensions.get('window').width / 3 - 4,
          height: Dimensions.get('window').width / 3 - 4,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={item.key}>
        <Text style={{fontSize: 40, color: '#FFFFFF'}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <DraggableGrid
        numColumns={3}
        renderItem={render_item}
        data={data}
        onDragRelease={data => {
          setData(data);
        }}
      />
      {/* <FlatList
        numColumns={3}
        data={data}
        renderItem={({item, index}) => {
          console.info('CDT', item, index);
          return (
            <View
              style={{
                width: Dimensions.get('window').width / 3,
                height: Dimensions.get('window').width / 3,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text style={{fontSize: 40, color: '#FFFFFF'}}>{item.name}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

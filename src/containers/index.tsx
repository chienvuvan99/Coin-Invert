import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import Home from '~/containers/home';
import Detail from '~/containers/detail';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

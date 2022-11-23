import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import Home from '~/containers/home';
import Detail from '~/containers/detail';
import Login from './login';
import TestUi from './test/TestUi';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TestUi} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

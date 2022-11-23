import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
type RowProps = {
  style: StyleProp<View>;
  onLayout: () => void;
  panHandlers: any;
  delayLongPress: number;
  onLongPress: () => void;
  onPress: () => void;
  children: any;
  itemWrapperStyle?: any;
  deletionView: any;
  inactive: boolean;
};
const RowItem = (props: RowProps) => {
  return (
    <Animated.View
      style={props.style}
      onLayout={props.onLayout}
      {...props.panHandlers}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        delayLongPress={props.delayLongPress}
        onLongPress={() => props.inactive || props.onLongPress()}
        onPress={() => props.inactive || props.onPress()}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={props.itemWrapperStyle}>{props.children}</View>
          {props.deletionView}
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default RowItem;

const styles = StyleSheet.create({});

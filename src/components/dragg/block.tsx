/** @format */

import * as React from 'react';
import {
  Animated,
  StyleProp,
  TouchableWithoutFeedback,
  StyleSheet,
  GestureResponderHandlers,
  View,
} from 'react-native';
import {FunctionComponent} from 'react';

interface BlockProps {
  style?: StyleProp<any>;
  dragStartAnimationStyle: StyleProp<any>;
  onPress?: () => void;
  onLongPress: () => void;
  panHandlers: GestureResponderHandlers;
  delayLongPress: number;
  renderItem?: React.ReactNode;
}

export const Block: FunctionComponent<BlockProps> = ({
  style,
  dragStartAnimationStyle,
  onPress,
  onLongPress,
  renderItem,
  panHandlers,
  delayLongPress,
}) => {
  return (
    <View>
      <Animated.View
        style={[styles.blockContainer, style, dragStartAnimationStyle]}
        {...panHandlers}>
        <Animated.View>
          <TouchableWithoutFeedback
            delayLongPress={delayLongPress}
            onPress={onPress}
            onLongPress={onLongPress}>
            {renderItem}
          </TouchableWithoutFeedback>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
  },
});

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

export interface SeparatorInterface {
  backgroundColor?: ViewStyle['backgroundColor'];
  tintColor?: ViewStyle['backgroundColor'];
  isHidden?: boolean;
  insetLeft?: ViewStyle['marginLeft'];
  insetRight?: ViewStyle['marginRight'];
  withSafeAreaView?: boolean;
}

const Separator: React.FC<SeparatorInterface> = ({
  backgroundColor = '#FFF',
  tintColor = '#C8C7CC',
  isHidden = false,
  insetLeft = 15,
  insetRight = 0,
  withSafeAreaView = Platform.OS === 'ios'
    ? parseInt(`${Platform.Version}`, 10) <= 10
      ? false
      : true
    : true,
}) => {
  const localStyles = {
    separator: [styles.separator, { backgroundColor: backgroundColor }],
    separator_inner: [
      styles.separator_inner,
      {
        backgroundColor: isHidden ? 'transparent' : tintColor,
        marginLeft: insetLeft,
        marginRight: insetRight,
      },
    ],
  };

  if (withSafeAreaView) {
    return (
      <SafeAreaView style={localStyles.separator}>
        <View style={localStyles.separator_inner} />
      </SafeAreaView>
    );
  }
  return (
    <View style={localStyles.separator}>
      <View style={localStyles.separator_inner} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {},
  separator_inner: {
    height: StyleSheet.hairlineWidth,
  },
});

export default Separator;

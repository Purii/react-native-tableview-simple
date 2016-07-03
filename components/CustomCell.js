import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

const CustomCell = (props) => {
  /** Deprecation messages */
  // eslint-disable-next-line
  if (props.cellTintColor) {
    console.warn('`<CustomCell cellTintColor="..." />` is deprecated. Use `<CustomCell contentContainerStyle={{ backgroundColor: \'#fff\' }} />` instead.');
  }
  // eslint-disable-next-line
  if (props.cellTextColor) {
    console.warn('`<CustomCell cellTextColor="..." />` is deprecated. Use `<CustomCell contentContainerStyle={{ backgroundColor: \'#fff\' }} />` instead.');
  }
  // eslint-disable-next-line
  if (props.cellHeight) {
    console.warn('`<CustomCell cellHeight="..." />` is deprecated. Use `<CustomCell contentContainerStyle={{ height: 44 }} />` instead.');
  }

  const {
    children,
    contentContainerStyle,
    highlightActiveOpacity,
    highlightUnderlayColor,
    isDisabled,
    onPress,
  } = props;

  const isPressable = !!onPress;

  /* Declare and merge styles with props */
  const styleCell = [...{}, styles.cell, props.contentContainerStyle];

  if (isPressable && !isDisabled) {
    return (
      <TouchableHighlight
        activeOpacity={highlightActiveOpacity}
        onPress={onPress}
        underlayColor={highlightUnderlayColor}
      >
        <View style={styleCell}>{children}</View>
      </TouchableHighlight>
    );
  }
  return (<View style={styleCell}>{children}</View>);
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
    height: 44,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CustomCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  contentContainerStyle: View.propTypes.style,
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
};

CustomCell.defaultProps = {
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black',
  isDisabled: false,
};

export default CustomCell;

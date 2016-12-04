/* eslint-disable import/no-unresolved */
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
/* eslint-enable import/no-unresolved */

const CustomCell = (props) => {
  const {
    children,
    contentContainerStyle,
    highlightActiveOpacity,
    highlightUnderlayColor,
    isDisabled,
    onPress,
  } = props;

  const isPressable = !!onPress;

  /**
    * Merge styles with props
    */
  // eslint-disable-next-line no-underscore-dangle
  const _styles = {
    cell: [
      ...{},
      styles.cell,
      contentContainerStyle,
    ],
  };

  if (isPressable && !isDisabled) {
    return (
      <TouchableHighlight
        activeOpacity={highlightActiveOpacity}
        onPress={onPress}
        underlayColor={highlightUnderlayColor}
      >
        <View style={_styles.cell}>{children}</View>
      </TouchableHighlight>
    );
  }
  return (<View style={_styles.cell}>{children}</View>);
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
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

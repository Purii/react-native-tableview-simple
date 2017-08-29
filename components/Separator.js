/* eslint-disable import/no-unresolved */
import React from 'react';

import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

const Separator = props => {
  const localStyles = {
    separator: [styles.separator, { backgroundColor: props.backgroundColor }],
    separator_inner: [
      styles.separator_inner,
      {
        backgroundColor: props.isHidden ? 'transparent' : props.tintColor,
        marginLeft: props.insetLeft,
        marginRight: props.insetRight,
      },
    ],
  };

  return (
    <View style={localStyles.separator}>
      <View style={localStyles.separator_inner} />
    </View>
  );
};

Separator.propTypes = {
  backgroundColor: PropTypes.string,
  insetLeft: PropTypes.number.isRequired,
  insetRight: PropTypes.number.isRequired,
  isHidden: PropTypes.bool,
  tintColor: PropTypes.string.isRequired,
};

Separator.defaultProps = {
  backgroundColor: '#FFF',
  insetLeft: 15,
  insetRight: 0,
  isHidden: false,
  tintColor: '#C8C7CC',
};

const styles = StyleSheet.create({
  separator: {},
  separator_inner: {
    height: StyleSheet.hairlineWidth,
  },
});

export default Separator;

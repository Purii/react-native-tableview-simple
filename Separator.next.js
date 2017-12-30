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
        backgroundColor: props.isInvisible
          ? props.invisibleTintColor
          : props.tintColor,
        opacity: props.isInvisible ? props.invisibleOpacity : 1,
        marginLeft: props.isInvisible ? 0 : props.insetLeft,
        marginRight: props.isInvisible ? 0 : props.insetRight,
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
  isInvisible: PropTypes.bool,
  invisibleTintColor: PropTypes.string,
  invisibleOpacity: PropTypes.number,
  tintColor: PropTypes.string.isRequired,
};

Separator.defaultProps = {
  backgroundColor: '#FFF',
  insetLeft: 15,
  insetRight: 0,
  isInvisible: false,
  tintColor: '#C8C7CC',
};

const styles = StyleSheet.create({
  separator: {},
  separator_inner: {
    height: StyleSheet.hairlineWidth,
  },
});

export default Separator;

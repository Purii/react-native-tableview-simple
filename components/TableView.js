/* eslint-disable import/no-unresolved */
import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';
/* eslint-enable import/no-unresolved */

const TableView = props => (
  <View style={styles.tableView}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
  },
});

TableView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    // Allow false, null, undefined and true, because they are valid children according docs
    PropTypes.bool,
    null,
    undefined,
  ]),
};

TableView.defaultProps = {
  children: null,
};

export default TableView;

/* eslint-disable import/no-unresolved */
import React from 'react';

import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';
/* eslint-enable import/no-unresolved */

const TableView = props => (
  <View style={styles.tableView}>{props.children}</View>
);

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
  },
});

TableView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TableView.defaultProps = {
  children: null,
};

export default TableView;

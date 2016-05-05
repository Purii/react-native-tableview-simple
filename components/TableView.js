import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const TableView = (props) => (
  <View style={styles.tableView}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
    flex: 1,
  },
});

TableView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default TableView;

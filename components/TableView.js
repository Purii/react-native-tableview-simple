import React, {
  StyleSheet,
  View,
} from 'react-native';

const TableView = () => (
  <View style={styles.tableView}>
    {this.props.children}
  </View>
);

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default TableView;

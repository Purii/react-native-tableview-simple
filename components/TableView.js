import React, { Component, PropTypes, StyleSheet, View } from 'react-native';

export default class TableView extends Component {
  render() {
    return(
      <View style={styles.tableView}>
         {this.props.children}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  'tableView': {
    flexDirection: 'column',
    flex: 1,
  }
});
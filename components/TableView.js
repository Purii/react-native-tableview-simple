import React, { Component, StyleSheet, View } from 'react-native';

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
    paddingBottom: 40,
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
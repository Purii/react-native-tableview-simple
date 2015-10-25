import React, { Component, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class CustomCell extends Component {
  render() {
    const {title, cellstyle, isDisabled, accessory} = this.props || {
      cellstyle: 'Basic',
      isDisabled: 'false',
      accessory: ''
    }
    const isPressable = this.props.onPress ? true : false;

    let renderCell = () => {
      return(
        <View style={styles.cellcontainer}>
          <View style={styles.cell}>
            <Text style={isDisabled ? [...{}, styles.cell_title__disabled, styles.cell_title] : styles.cell_title}>{title}</Text>
            <View style={styles.cell_arrow}></View>
          </View>
        </View>
        )
    }
    

    if(isPressable && !isDisabled) {
        return(
          <TouchableHighlight onPress={this.props.onPress}>
            {renderCell()}
          </TouchableHighlight>
        )
      }  
      return (<View>{renderCell()}</View>)


  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },

  'cell_arrow': {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#c7c7cc',
    transform: [{
      rotate: '45deg'
    }]
  }


});
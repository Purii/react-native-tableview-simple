import React, { Component, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class Cell extends Component {
  render() {
    const {title, detail, cellstyle, isDisabled} = this.props || {
      cellstyle: 'Basic',
      isDisabled: 'false',
      detail: ''
    }
    const isPressable = this.props.onPress ? true : false;
    const accessory = this.props.accessory || false;

    let renderAccessory = () => {
      if(!accessory) return;
      console.log(accessory);
      return (
        <View style={styles.cell_DiIn}></View>
      )
    }
    /** CellStyle: Basic */
    let CellBasic = () => {
      return(
        <View style={styles.cellcontainer}>
          <View style={styles.cell}>
            <Text style={isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : styles.cell_title}>{title}</Text>
            {renderAccessory()}
          </View>
      </View>
      )
    }

    /** CellStyle: RightDetail */
    let CellRightDetail = () => {
      return(
        <View style={styles.cellcontainer}>
          <View style={styles.cell}>
            <Text style={isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : styles.cell_title}>{title}</Text>
            <Text style={isDisabled ? [...{}, styles.cell_detail, styles.cell_text__disabled] : styles.cell_detail}>{detail}</Text>
            {renderAccessory()}
          </View>
        </View>
      )
    }

    /** CellStyle: LeftDetail */
    let CellLeftDetail = () => {
      return(
        <View style={styles.cellcontainer}>
          <View style={styles.cell}>
            <Text style={isDisabled ? [...{}, styles.cell_leftdetail, styles.cell_text__disabled] : styles.cell_leftdetail}>{detail}</Text>
            <Text style={isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : styles.cell_title}>{title}</Text>
            {renderAccessory()}
          </View>
        </View>
      )
    }

    /** CellStyle: Subtitle */
    let CellSubtitle = () => {
      return(
        <View style={styles.cellcontainer}>
          <View style={styles.cell__subtitle}>
            <View style={styles.cellinner__subtitle}>
              <Text style={isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : styles.cell_title}>{title}</Text>
              <Text style={isDisabled ? [...{}, styles.cell_subtitle, styles.cell_text__disabled] : styles.cell_subtitle}>{detail}</Text>
            </View>
            {renderAccessory()}
          </View>
        </View>
      )
    }
    
    let renderCell = () => {
      let cellToRender = CellBasic;
      switch(cellstyle) {
        case 'Basic':
          cellToRender = CellBasic;
          break;
        case 'RightDetail':
          cellToRender = CellRightDetail;
          break;
        case 'LeftDetail':
          cellToRender = CellLeftDetail;
          break;
        case 'Subtitle':
          cellToRender = CellSubtitle;
          break;
      }

      if(isPressable && !isDisabled) {
        return(
          <TouchableHighlight onPress={this.props.onPress}>
            {cellToRender()}
          </TouchableHighlight>
        )
      }  
      return (<View>{cellToRender()}</View>)
    }
    
    return(
      <View>
        {renderCell()}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  'cell': {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  'cell__subtitle': {
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  'cellinner__subtitle': {
    flexDirection: 'column',
    flex: 1
  },
  'cell_title':{
    fontSize: 16,
    flex: 1,
  },
  'cell_detail': {
    fontSize: 16,
    alignSelf: 'center',
    color: '#8E8E93'
  },
  'cell_leftdetail': {
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'right',
    color: '#007AFF',
    marginRight: 5,
    width: 50
  },
  'cell_subtitle': {
    fontSize: 11
  },
  'cell_text__disabled':{
    color: 'gray'
  },

  'cell_DiIn': {
    width: 10,
    height: 10,
    marginLeft: 5,
    backgroundColor: 'transparent',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#c7c7cc',
    transform: [{
      rotate: '45deg'
    }]
  }
});
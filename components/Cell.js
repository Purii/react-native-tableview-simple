import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Cell extends Component {
  render() {
    const {title} = this.props;
    const cellstyle = this.props.cellstyle;
    const isDisabled = this.props.isDisabled;
    const detail = this.props.detail;
    const isPressable = this.props.onPress ? true : false;
    const accessory = this.props.accessory;
    const cellTintColor = this.props.cellTintColor;
    const titleTintColor = this.props.titleTintColor;
    const highlightUnderlayColor = this.props.highlightUnderlayColor;
    const highlightActiveOpacity = this.props.highlightActiveOpacity;

    /* Set styles */
    const styleCell = [...{}, styles.cell, { backgroundColor: cellTintColor}];
    const styleCell__subtitle = [...{}, styles.cell__subtitle, { backgroundColor: cellTintColor}];
    const styleCell_title = isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : [...{}, styles.cell_title, {color: titleTintColor}];
    const styleCell_leftDetailTitle = isDisabled ? [...{}, styles.cell_leftDetailTitle, styles.cell_text__disabled] : [...{}, styles.cell_leftDetailTitle, {color: titleTintColor}];

    /**
     * Render accessory
     * Currently available
     * @return {View} Viewelement with accessory
     */
    let renderAccessory = () => {
      if (!accessory) { return; }
      switch (accessory) {
        case 'DisclosureIndicator':
          return (<View style={styles.accessory_disclosureIndicator}></View>);
        case 'Detail':
          return (
            <View style={styles.accessory_detail}>
              <Text style={styles.accessory_detailText}>i</Text>
            </View>);
        case 'DetailDisclosure':
          return (
            <View style={styles.accessory_detailDisclosure}>
              <View style={styles.accessory_detail}>
                <Text style={styles.accessory_detailText}>i</Text>
              </View>
              <View style={styles.accessory_disclosureIndicator}></View>
            </View>);
        case 'Checkmark':
          return (<View style={styles.accessory_checkmark}></View>);
        default:
         return;
      }
    };

    /**
     * Render cell of type Basic
     * @return {View}
     */
    let CellBasic = () => {
      return (
          <View style={styleCell}>
            <Text numberOfLines={1} style={styleCell_title}>{title}</Text>
            {renderAccessory()}
          </View>
      );
    };

    /**
     * Render cell of type RightDetail
     * @return {View}
     */
    let CellRightDetail = () => {
      return (
          <View style={styleCell}>
            <Text numberOfLines={1} style={styleCell_title}>{title}</Text>
            <Text numberOfLines={1} style={isDisabled ? [...{}, styles.cell_detail, styles.cell_text__disabled] : styles.cell_detail}>{detail}</Text>
            {renderAccessory()}
          </View>
      );
    };

    /**
     * Render cell of type LeftDetail
     * @return {View}
     */
    let CellLeftDetail = () => {
      return (
          <View style={styleCell}>
            <Text numberOfLines={1} style={isDisabled ? [...{}, styles.cell_leftdetail, styles.cell_text__disabled] : styles.cell_leftdetail}>{detail}</Text>
            <Text numberOfLines={1} style={styleCell_leftDetailTitle}>{title}</Text>
            {renderAccessory()}
          </View>
      );
    };

    /**
     * Render cell of type Subtitle
     * @return {View}
     */
    let CellSubtitle = () => {
      return (
          <View style={styleCell__subtitle}>
            <View style={styles.cellinner__subtitle}>
              <Text numberOfLines={1} style={styleCell_title}>{title}</Text>
              <Text numberOfLines={1} style={isDisabled ? [...{}, styles.cell_subtitle, styles.cell_text__disabled] : styles.cell_subtitle}>{detail}</Text>
            </View>
            {renderAccessory()}
          </View>
      );
    };

    /**
     * Render cell by type
     * @return {View}
     */
    let renderCell = () => {
      let cellToRender = CellBasic;
      switch (cellstyle) {
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

      if (isPressable && !isDisabled) {
        return (
          <TouchableHighlight onPress={this.props.onPress} underlayColor={highlightUnderlayColor} activeOpacity={highlightActiveOpacity}>
            {cellToRender()}
          </TouchableHighlight>
        );
      }
      return (<View>{cellToRender()}</View>);
    };

    return (
      <View>
        {renderCell()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  'cell': {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  'cell__subtitle': {
    height: 44,
    paddingLeft: 15,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'cellinner__subtitle': {
    flexDirection: 'column',
    flex: 1
  },
  'cell_title':{
    fontSize: 16,
    flex: 1,
  },
  'cell_leftDetailTitle':{
    fontSize: 12,
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
    width: 75
  },
  'cell_subtitle': {
    fontSize: 11
  },
  'cell_text__disabled':{
    color: 'gray'
  },
  'accessory_disclosureIndicator': {
    width: 10,
    height: 10,
    marginLeft: 7,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#c7c7cc',
    transform: [{
      rotate: '45deg'
    }]
  },
  'accessory_detail': {
    width: 20,
    height: 20,
    marginLeft: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  'accessory_detailText': {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Georgia'
  },
  'accessory_detailDisclosure': {
    flexDirection: 'row',
    alignItems: 'center'
  },
  'accessory_checkmark': {
    width: 13,
    height: 6,
    marginLeft: 7,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#007AFF',
    transform: [{
      rotate: '-45deg'
    }]
  }
});


Cell.propTypes = {
  title: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  detail: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  cellstyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  accessory: PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
  ]),
  cellTintColor: PropTypes.string.isRequired,
  titleTintColor: PropTypes.string,
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  onPress: PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ])
};

Cell.defaultProps = {
  title: '',
  detail: '',
  cellstyle: 'Basic',
  isDisabled: false,
  accessory: false,
  cellTintColor: '#fff',
  titleTintColor: '#000',
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black'
};

/* eslint-disable consistent-return */
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Switch,
} from 'react-native';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSizeMultiplier: 1,
    };
  }

  componentWillMount() {
    /**
     * Need AccessibilityManager to access the current font size multiplier
     */
    if (Platform.OS !== 'ios' || !this.props.allowFontScaling) return;
    NativeModules.AccessibilityManager.getMultiplier(value => {
      this.setState({
        fontSizeMultiplier: value,
      });
    });
  }
  render() {
    const {
      accessory,
      accessoryColor,
      switchOnTintColor,
      switchThumbTintColor,
      switchTintColor,
      onSwitchValueChange,
      switchValue,
      cellstyle,
      cellTintColor,
      detail,
      highlightActiveOpacity,
      highlightUnderlayColor,
      isDisabled,
      leftDetailColor,
      title,
      titleTintColor,
    } = this.props;

    // eslint-disable-next-line no-unneeded-ternary
    const isPressable = this.props.onPress ? true : false;

    /* Declare and merge styles with props */
    const styleCell = [...{}, styles.cell, { backgroundColor: cellTintColor, height: 44 * this.state.fontSizeMultiplier }];
    const styleCell__subtitle = [...{}, styles.cell__subtitle, { backgroundColor: cellTintColor, height: 44 * this.state.fontSizeMultiplier }];
    const styleCell_title = isDisabled ? [...{}, styles.cell_title, styles.cell_text__disabled] : [...{}, styles.cell_title, { color: titleTintColor }];
    const styleCell_leftDetailTitle = isDisabled ? [...{}, styles.cell_leftDetailTitle, styles.cell_text__disabled] : [...{}, styles.cell_leftDetailTitle, { color: titleTintColor }];

    /* Apply color prop to accessories */
    const styleAccessory_checkmark = [...{}, styles.accessory_checkmark, { borderColor: accessoryColor }];
    const styleAccessory_detail = [...{}, styles.accessory_detail, { borderColor: accessoryColor }];
    const styleAccessory_detailText = [...{}, styles.accessory_detailText, { color: accessoryColor }];
    const styleCell_leftDetail = [...{}, styles.cell_leftdetail, { color: leftDetailColor }];

    /**
     * Render accessory
     * Currently available
     * @return {View} Viewelement with accessory
     */
    const renderAccessory = () => {
      if (!accessory) { return; }
      switch (accessory) {
        case 'DisclosureIndicator':
          return (<View style={styles.accessory_disclosureIndicator} />);
        case 'Detail':
          return (
            <View style={styleAccessory_detail}>
              <Text style={styleAccessory_detailText}>i</Text>
            </View>
          );
        case 'DetailDisclosure':
          return (
            <View style={styles.accessory_detailDisclosure}>
              <View style={styleAccessory_detail}>
                <Text style={styleAccessory_detailText}>i</Text>
              </View>
              <View style={styles.accessory_disclosureIndicator} />
            </View>
          );
        case 'Checkmark':
          return (<View style={styleAccessory_checkmark} />);
        case 'Switch':
          return (<Switch onTintColor={switchOnTintColor} thumbTintColor={switchThumbTintColor} tintColor={switchTintColor} value={switchValue} onValueChange={onSwitchValueChange} disabled={isDisabled} />);
        default:
          return;
      }
    };

    /**
     * Render cell of type Basic
     * @return {View}
     */
    const CellBasic = () => (
      <View style={styleCell}>
        <Text
          allowFontScaling={this.props.allowFontScaling}
          numberOfLines={1}
          style={styleCell_title}
        >
          {title}
        </Text>
          {renderAccessory()}
      </View>
    );

   /**
    * Render cell of type RightDetail
    * @return {View}
    */
    const CellRightDetail = () => (
      <View style={styleCell}>
        <Text
          allowFontScaling={this.props.allowFontScaling}
          numberOfLines={1}
          style={styleCell_title}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={isDisabled ? [...{}, styles.cell_detail, styles.cell_text__disabled] : styles.cell_detail}>{detail}</Text>
          {renderAccessory()}
      </View>
    );

    /**
    * Render cell of type LeftDetail
    * @return {View}
    */
    const CellLeftDetail = () => (
      <View style={styleCell}>
        <Text
          allowFontScaling={this.props.allowFontScaling}
          numberOfLines={1}
          style={isDisabled ? [...{}, styleCell_leftDetail, styles.cell_text__disabled] : styleCell_leftDetail}
        >
          {detail}
        </Text>
        <Text
          allowFontScaling={this.props.allowFontScaling}
          numberOfLines={1}
          style={styleCell_leftDetailTitle}
        >
          {title}
        </Text>
        {renderAccessory()}
      </View>
    );

    /**
     * Render cell of type Subtitle
     * @return {View}
     */
    const CellSubtitle = () => (
      <View style={styleCell__subtitle}>
        <View style={styles.cellinner__subtitle}>
          <Text
            allowFontScaling={this.props.allowFontScaling}
            numberOfLines={1}
            style={styleCell_title}
          >
            {title}
          </Text>
          <Text
            allowFontScaling={this.props.allowFontScaling}
            numberOfLines={1}
            style={isDisabled ? [...{}, styles.cell_subtitle, styles.cell_text__disabled] : styles.cell_subtitle}
          >
            {detail}
          </Text>
        </View>
        {renderAccessory()}
      </View>
    );

    /**
     * Render cell by type
     * @return {View}
     */
    const renderCell = () => {
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
        default:
          cellToRender = CellBasic;
      }

      if (isPressable && !isDisabled) {
        return (
          <TouchableHighlight
            activeOpacity={highlightActiveOpacity}
            onPress={this.props.onPress}
            underlayColor={highlightUnderlayColor}
          >
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
  cell: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  cell__subtitle: {
    height: 44,
    paddingLeft: 15,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellinner__subtitle: {
    flexDirection: 'column',
    flex: 1,
  },
  cell_title: {
    fontSize: 16,
    flex: 1,
  },
  cell_leftDetailTitle: {
    fontSize: 12,
    flex: 1,
  },
  cell_detail: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#8E8E93',
  },
  cell_leftdetail: {
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 5,
    width: 75,
  },
  cell_subtitle: {
    fontSize: 11,
  },
  cell_text__disabled: {
    color: 'gray',
  },
  accessory_disclosureIndicator: {
    width: 10,
    height: 10,
    marginLeft: 7,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#c7c7cc',
    transform: [{
      rotate: '45deg',
    }],
  },
  accessory_detail: {
    width: 20,
    height: 20,
    marginLeft: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessory_detailText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Georgia',
  },
  accessory_detailDisclosure: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accessory_checkmark: {
    width: 13,
    height: 6,
    marginLeft: 7,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#007AFF',
    transform: [{
      rotate: '-45deg',
    }],
  },
});

Cell.propTypes = {
  accessory: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  accessoryColor: PropTypes.string.isRequired,
  switchOnTintColor: PropTypes.string,
  switchThumbTintColor: PropTypes.string,
  switchTintColor: PropTypes.string,
  onSwitchValueChange: PropTypes.func,
  switchValue: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  cellstyle: PropTypes.string,
  cellTintColor: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftDetailColor: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  titleTintColor: PropTypes.string,
  onPress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
};

Cell.defaultProps = {
  accessory: false,
  accessoryColor: '#007AFF',
  allowFontScaling: true,
  cellstyle: 'Basic',
  cellTintColor: '#fff',
  detail: '',
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black',
  isDisabled: false,
  leftDetailColor: '#007AFF',
  title: '',
  titleTintColor: '#000',
};

export default Cell;

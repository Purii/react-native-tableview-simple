/* eslint-disable import/no-unresolved */
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
  Image
} from 'react-native';
/* eslint-enable import/no-unresolved */

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSizeMultiplier: 1,
    };

    /** Deprecation messages */
    // eslint-disable-next-line
    if (props.cellTextColor) {
      console.warn('`<Cell cellTextColor="..." />` is deprecated. Use `<Cell backgroundColor="..." />` instead.');
    }
    // eslint-disable-next-line
    if (props.titleTintColor) {
      console.warn('`<Cell titleTintColor="..." />` is deprecated. Use `<Cell titleTextColor="..." />` instead.');
    }
    // eslint-disable-next-line
    if (props.cellstyle) {
      console.warn('`<Cell cellstyle="..." />` is deprecated. Use `<Cell cellStyle="..." />` instead.');
    }
  }

  componentWillMount() {
    /**
     * Need AccessibilityManager to access the current font size multiplier
     */
    if (Platform.OS !== 'ios' || !this.props.allowFontScaling) return;
    NativeModules.AccessibilityManager.getMultiplier((value) => {
      this.setState({
        fontSizeMultiplier: value,
      });
    });
  }
  render() {
    const {
      accessory,
      accessoryColor,
      backgroundColor,
      detail,
      highlightActiveOpacity,
      highlightUnderlayColor,
      isDisabled,
      leftDetailColor,
      rightDetailColor,
      title,
      titleTextColor,
      iconImg,

    } = this.props;

    let { cellStyle } = this.props;

    // eslint-disable-next-line
    if (this.props.cellstyle) cellStyle = this.props.cellstyle;

    const isPressable = !!this.props.onPress;

    // const styleCell_img = [
    //   ...{},
    //   styles.cell_image,
    //   {backgroundColor,height:44*this.state.fontSizeMultiplier },
    // ];

    const styleCell = [
      ...{},
      styles.cell,
      { backgroundColor, height: 44 * this.state.fontSizeMultiplier },
    ];


    const styleCell__subtitle = [
      ...{},
      styles.cell__subtitle,
      { backgroundColor, height: 44 * this.state.fontSizeMultiplier },
    ];


    const styleCell_title = isDisabled
      ? [...{}, styles.cell_title, styles.cell_text__disabled]
      : [...{}, styles.cell_title, { color: titleTextColor }];


    const styleCell_leftDetailTitle = isDisabled ?
      [...{}, styles.cell_leftDetailTitle, styles.cell_text__disabled]
      : [...{}, styles.cell_leftDetailTitle, { color: titleTextColor }];

    /* Apply color prop to accessories */
    const styleAccessory_checkmark = [
      ...{},
      styles.accessory_checkmark,
      { borderColor: accessoryColor },
    ];


    const styleAccessory_detail = [
      ...{},
      styles.accessory_detail,
      { borderColor: accessoryColor },
    ];


    const styleAccessory_detailText = [
      ...{},
      styles.accessory_detailText,
      { color: accessoryColor },
    ];


    const styleCell_leftDetail = [
      ...{},
      styles.cell_leftdetail,
      { color: leftDetailColor },
    ];


    const styleCell_rightDetail = [
      ...{},
      styles.cell_rightdetail,
      { color: rightDetailColor },
    ];

    /**
     * Render accessory
     * Currently available
     * @return {View} View with accessory
     */
    const renderAccessory = () => {
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
        default:
          return null;
      }
    };



    /**
     * Render cell of type Basic
     * @return {View} View with Text and Accessory
     */
    const CellBasic = () => (
      <View style={styleCell}>
        {

          this.props.iconImg  ? <Image source={this.props.iconImg} style={styles.cell_leftImage} /> : null

        }
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
     * @return {View} View with Text, Text and Accessory
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
        <Text
          numberOfLines={1}
          style={isDisabled ? [...{}, styleCell_rightDetail, styles.cell_text__disabled] : styleCell_rightDetail}
        >
          {detail}
        </Text>
        {renderAccessory()}
      </View>
    );

    /**
     * Render cell of type LeftDetail
     * @return {View} View with Text, Text and Accessory
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
     * @return {View} View with View, Text, Text and Accessory
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
     * @return {View} Returns the correct function to call
     */
    const renderCell = () => {
      let cellToRender = CellBasic;

      switch (cellStyle) {
        //
        // case 'imgCell':
        //   cellToRender = ImgCell;
        //   break;

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

  cell_leftImage: {
    resizeMode:'contain',
    marginRight:6,
    width:26,
    height:26,

  },

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
    paddingVertical: 5,
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
  cell_leftdetail: {
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 5,
    width: 75,
  },
  cell_rightdetail: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#8E8E93',
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
  allowFontScaling: PropTypes.bool,
  cellStyle: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftDetailColor: PropTypes.string,
  rightDetailColor: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  titleTextColor: PropTypes.string,
  onPress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  //icon
  iconImg:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

};

Cell.defaultProps = {
  accessory: false,
  accessoryColor: '#007AFF',
  allowFontScaling: true,
  cellStyle: 'Basic',
  backgroundColor: '#fff',
  detail: '',
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black',
  isDisabled: false,
  leftDetailColor: '#007AFF',
  rightDetailColor: '#8E8E93',
  title: '',
  titleTextColor: '#000',
  iconImg:'',

};


export default Cell;

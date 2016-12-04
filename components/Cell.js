/* eslint-disable import/no-unresolved */
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
/* eslint-enable import/no-unresolved */

const Cell = (props) => {
  const {
    accessory,
    accessoryColor,
    allowFontScaling,
    backgroundColor,
    cellStyle,
    contentContainerStyle,
    detail,
    highlightActiveOpacity,
    highlightUnderlayColor,
    isDisabled,
    leftDetailColor,
    rightDetailColor,
    title,
    titleTextColor,
  } = props;

  const isPressable = !!props.onPress;

  /**
    * Merge styles with props
    */
  // eslint-disable-next-line no-underscore-dangle
  const _styles = {
    cell: [
      ...{},
      styles.cell,
      { backgroundColor },
      contentContainerStyle,
    ],
    cell__type_subtitle: [
      ...{},
      styles.cell__type_subtitle,
      { backgroundColor },
    ],
    cell_title: isDisabled
      ? [...{}, styles.cell_title, styles.cell_text__disabled]
      : [...{}, styles.cell_title, { color: titleTextColor }],
    cell_leftDetail: [
      ...{},
      styles.cell_leftDetail,
      { color: leftDetailColor },
    ],
    cell_leftDetailTitle: isDisabled
      ? [...{}, styles.cell_leftDetailTitle, styles.cell_text__disabled]
      : [...{}, styles.cell_leftDetailTitle, { color: titleTextColor }],
    cell_rightDetail: [
      ...{},
      styles.cell_rightDetail,
      { color: rightDetailColor },
    ],
    accessory_checkmark: [
      ...{},
      styles.accessory_checkmark,
      { borderColor: accessoryColor },
    ],
    accessory_detail: [
      ...{},
      styles.accessory_detail,
      { borderColor: accessoryColor },
    ],
    accessory_detailText: [
      ...{},
      styles.accessory_detailText,
      { color: accessoryColor },
    ],
  };

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
          <View style={_styles.accessory_detail}>
            <Text style={_styles.accessory_detailText}>i</Text>
          </View>
        );
      case 'DetailDisclosure':
        return (
          <View style={styles.accessory_detailDisclosure}>
            <View style={_styles.accessory_detail}>
              <Text style={_styles.accessory_detailText}>i</Text>
            </View>
            <View style={styles.accessory_disclosureIndicator} />
          </View>
        );
      case 'Checkmark':
        return (<View style={_styles.accessory_checkmark} />);
      default:
        return null;
    }
  };

  /**
    * Render cell of type Basic
    * @return {View} View with Text and Accessory
    */
  const CellBasic = () => (
    <View style={_styles.cell}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={_styles.cell_title}
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
    <View style={_styles.cell}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={_styles.cell_title}
      >
        {title}
      </Text>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={isDisabled ? [...{}, _styles.cell_rightDetail, styles.cell_text__disabled] : _styles.cell_rightDetail}
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
    <View style={_styles.cell}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={isDisabled ? [...{}, _styles.cell_leftDetail, styles.cell_text__disabled] : _styles.cell_leftDetail}
      >
        {detail}
      </Text>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={_styles.cell_leftDetailTitle}
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
    <View style={_styles.cell__type_subtitle}>
      <View style={styles.cellinner__subtitle}>
        <Text
          allowFontScaling={allowFontScaling}
          numberOfLines={1}
          style={_styles.cell_title}
        >
          {title}
        </Text>
        <Text
          allowFontScaling={allowFontScaling}
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
          onPress={props.onPress}
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
};

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell__type_subtitle: {
    paddingLeft: 15,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
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
    /* Padding should be added to content instead of cell, because an accessory could be bigger --> Cell height > 44 */
    paddingVertical: 3,
  },
  cell_leftDetail: {
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 5,
    width: 75,
  },
  cell_rightDetail: {
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
  contentContainerStyle: View.propTypes.style,
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
};

export default Cell;

/* eslint-disable import/no-unresolved */
import React from 'react';

import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewPropTypes,
} from 'react-native';

const Cell = props => {
  const {
    accessory,
    accessoryColor,
    allowFontScaling,
    backgroundColor,
    cellStyle,
    cellContentView,
    cellImageView,
    cellAccessoryView,
    contentContainerStyle,
    detail,
    subtitle,
    detailTextStyle,
    disableImageResize,
    highlightActiveOpacity,
    highlightUnderlayColor,
    image,
    isDisabled,
    onPress,
    onHighlightRow,
    onUnHighlightRow,
    leftDetailColor,
    rightDetailColor,
    subtitleColor,
    subtitleTextStyle,
    title,
    titleTextStyle,
    titleTextStyleDisabled,
    titleTextColor,
  } = props;

  const isPressable = !!onPress;

  /**
   * Merge styles with props
   */
  // eslint-disable-next-line no-underscore-dangle
  const _styles = {
    ...styles,
    cell: [
      styles.cell,
      {
        backgroundColor,
      },
      contentContainerStyle,
    ],
    cell_title: isDisabled
      ? [styles.cell_title, styles.cell_text__disabled, titleTextStyleDisabled]
      : [styles.cell_title, { color: titleTextColor }, titleTextStyle],
    cell_leftDetail: [
      styles.cell_leftDetail,
      {
        color: leftDetailColor,
      },
      detailTextStyle,
    ],
    cell_leftDetailTitle: isDisabled
      ? [styles.cell_leftDetailTitle, styles.cell_text__disabled]
      : [styles.cell_leftDetailTitle, { color: titleTextColor }],
    cell_rightDetail: [
      styles.cell_rightDetail,
      {
        color: rightDetailColor,
      },
      detailTextStyle,
    ],
    cell_subtitle: [
      styles.cell_subtitle,
      {
        color: subtitleColor,
      },
      subtitleTextStyle,
    ],
    accessory_checkmark: [
      styles.accessory_checkmark,
      { borderColor: accessoryColor },
    ],
    accessory_detail: [
      styles.accessory_detail,
      { borderColor: accessoryColor },
    ],
    accessory_detailText: [
      styles.accessory_detailText,
      { color: accessoryColor },
    ],
  };

  /**
   * Render accessoryView
   * Currently available
   * @return {View} View with accessory
   */
  const renderAccessoryView = () => {
    switch (accessory) {
      case 'DisclosureIndicator':
        return (
          <View style={_styles.cellAccessoryView}>
            <View style={_styles.accessory_disclosureIndicator} />
          </View>
        );
      case 'Detail':
        return (
          <View style={_styles.cellAccessoryView}>
            <View style={_styles.accessory_detail}>
              <Text style={_styles.accessory_detailText}>i</Text>
            </View>
          </View>
        );
      case 'DetailDisclosure':
        return (
          <View style={_styles.cellAccessoryView}>
            <View style={_styles.accessory_detailDisclosure}>
              <View style={_styles.accessory_detail}>
                <Text style={_styles.accessory_detailText}>i</Text>
              </View>
              <View style={_styles.accessory_disclosureIndicator} />
            </View>
          </View>
        );
      case 'Checkmark':
        return (
          <View style={_styles.cellAccessoryView}>
            <View style={_styles.accessory_checkmark} />
          </View>
        );
      default:
        return null;
    }
  };

  /**
   * Render imageView
   * @return {Image} Image component with updated props
   */
  const renderImageView = () => {
    if (!image) return null;
    const propsToAdd = {
      style: disableImageResize
        ? image.props.style
        : [image.props.style, _styles.image],
    };
    return (
      <View style={_styles.cellImageView}>
        {React.cloneElement(image, propsToAdd)}
      </View>
    );
  };

  /**
   * Render cell of type Basic
   * @return {View} View with Text and Accessory
   */
  const renderCellBasic = () => (
    <View style={_styles.cellContentView}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={_styles.cell_title}
      >
        {title}
      </Text>
    </View>
  );

  /**
   * Render cell of type RightDetail
   * @return {View} View with Text, Text and Accessory
   */
  const renderCellRightDetail = () => (
    <View style={_styles.cellContentView}>
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
        style={
          isDisabled
            ? [_styles.cell_rightDetail, _styles.cell_text__disabled]
            : _styles.cell_rightDetail
        }
      >
        {detail}
      </Text>
    </View>
  );

  const renderCellRightDetailSubtitle = () => (
    <View
      style={[_styles.cellContentView, _styles.cellContentView__type_subtitle]}
    >
      <View style={_styles.cellinner__subtitle}>
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
          style={
            isDisabled
              ? [_styles.cell_subtitle, _styles.cell_text__disabled]
              : _styles.cell_subtitle
          }
        >
          {subtitle}
        </Text>
      </View>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={
          isDisabled
            ? [_styles.cell_rightDetail, _styles.cell_text__disabled]
            : _styles.cell_rightDetail
        }
      >
        {detail}
      </Text>
    </View>
  );

  /**
   * Render cell of type LeftDetail
   * @return {View} View with Text, Text and Accessory
   */
  const renderCellLeftDetail = () => (
    <View style={_styles.cellContentView}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={
          isDisabled
            ? [_styles.cell_leftDetail, _styles.cell_text__disabled]
            : _styles.cell_leftDetail
        }
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
    </View>
  );

  /**
   * Render cell of type Subtitle
   * @return {View} View with View, Text, Text and Accessory
   */
  const renderCellSubtitle = () => (
    <View
      style={[_styles.cellContentView, _styles.cellContentView__type_subtitle]}
    >
      <View style={_styles.cellinner__subtitle}>
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
          style={
            isDisabled
              ? [_styles.cell_subtitle, _styles.cell_text__disabled]
              : _styles.cell_subtitle
          }
        >
          {detail}
        </Text>
      </View>
    </View>
  );

  /**
   * Renders correct contentView
   * @return {View} ContentView
   */
  const renderCellContentView = () => {
    switch (cellStyle) {
      case 'Basic':
        return renderCellBasic();
      case 'RightDetail':
        return renderCellRightDetail();
      case 'LeftDetail':
        return renderCellLeftDetail();
      case 'Subtitle':
        return renderCellSubtitle();
      case 'RightDetailSubtitle':
        return renderCellRightDetailSubtitle();
      default:
        return renderCellBasic();
    }
  };

  /**
   * Render content of cell
   * @return {View} Complete View with cell elements
   */
  const renderCell = () => (
    <View style={_styles.cell}>
      {cellImageView || renderImageView()}
      {cellContentView || renderCellContentView()}
      {cellAccessoryView || renderAccessoryView()}
    </View>
  );

  if (isPressable && !isDisabled) {
    return (
      <TouchableHighlight
        activeOpacity={highlightActiveOpacity}
        onPress={onPress}
        underlayColor={highlightUnderlayColor}
        onPressIn={onHighlightRow}
        onPressOut={onUnHighlightRow}
      >
        {renderCell()}
      </TouchableHighlight>
    );
  }
  return <View>{renderCell()}</View>;
};

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    minHeight: 44,
    flexDirection: 'row',
  },
  cellContentView: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    // independent from other cellViews
    paddingVertical: 10,
  },
  cellContentView__type_subtitle: {
    paddingVertical: 4,
  },
  cellinner__subtitle: {
    flexDirection: 'column',
    flex: 1,
  },
  cell_title: {
    fontSize: 16,
    letterSpacing: -0.32,
    flex: 1,
  },
  cell_leftDetailTitle: {
    fontSize: 12,
    flex: 1,
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
    letterSpacing: -0.32,
    alignSelf: 'center',
    color: '#8E8E93',
  },
  cell_subtitle: {
    fontSize: 11,
    letterSpacing: 0.066,
  },
  cell_text__disabled: {
    color: 'gray',
  },
  cellImageView: {
    justifyContent: 'center',
    marginRight: 15,
  },
  image: {
    height: 29,
    width: 29,
  },
  cellAccessoryView: {
    justifyContent: 'center',
  },
  accessory_disclosureIndicator: {
    width: 10,
    height: 10,
    marginLeft: 7,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#c7c7cc',
    transform: [
      {
        rotate: '45deg',
      },
    ],
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
    letterSpacing: -0.24,
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
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
});

Cell.propTypes = {
  accessory: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  accessoryColor: PropTypes.string.isRequired,
  allowFontScaling: PropTypes.bool,
  cellStyle: PropTypes.string,
  cellContentView: PropTypes.element,
  cellImageView: PropTypes.element,
  cellAccessoryView: PropTypes.element,
  contentContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  detailTextStyle: Text.propTypes.style,
  disableImageResize: PropTypes.bool,
  hideSeparator: PropTypes.bool,
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  image: PropTypes.element,
  isDisabled: PropTypes.bool,
  leftDetailColor: PropTypes.string,
  onHighlightRow: PropTypes.func,
  onUnHighlightRow: PropTypes.func,
  rightDetailColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  subtitleTextStyle: Text.propTypes.style,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  titleTextColor: PropTypes.string,
  titleTextStyle: Text.propTypes.style,
  titleTextStyleDisabled: Text.propTypes.style,
  onPress: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

Cell.defaultProps = {
  accessory: false,
  accessoryColor: '#007AFF',
  allowFontScaling: true,
  cellStyle: 'Basic',
  cellContentView: null,
  cellImageView: null,
  cellAccessoryView: null,
  contentContainerStyle: {},
  backgroundColor: '#FFF',
  detail: '',
  subtitle: '',
  detailTextStyle: {},
  disableImageResize: false,
  hideSeparator: false,
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black',
  image: null,
  isDisabled: false,
  leftDetailColor: '#007AFF',
  onHighlightRow: null,
  onUnHighlightRow: null,
  onPress: false,
  rightDetailColor: '#8E8E93',
  subtitleColor: '#000',
  subtitleTextStyle: {},
  title: '',
  titleTextColor: '#000',
  titleTextStyle: {},
  titleTextStyleDisabled: {},
};

export default Cell;

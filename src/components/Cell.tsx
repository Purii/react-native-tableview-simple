import React, { useContext } from 'react';
import {
  PixelRatio,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextProps,
  TextStyle,
  ImageProps,
} from 'react-native';
import { ThemeContext } from './Theme';

export interface CellInterface {
  accessory?:
    | false
    | 'DisclosureIndicator'
    | 'Detail'
    | 'DetailDisclosure'
    | 'Checkmark';
  accessoryColor?: ViewStyle['borderColor'] | TextStyle['color'];
  accessoryColorDisclosureIndicator?: ViewStyle['borderColor'];
  allowFontScaling?: boolean;
  backgroundColor?: ViewStyle['backgroundColor'];
  cellStyle?: 'Basic' | 'RightDetail' | 'LeftDetail' | 'Subtitle';
  cellAccessoryView?: React.ReactNode;
  cellContentView?: React.ReactNode;
  cellImageView?: React.ReactNode;
  children?: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  detail?: string | number;
  detailTextStyle?: StyleProp<TextStyle>;
  detailTextProps?: TextProps;
  disableImageResize?: boolean;
  hideSeparator?: boolean;
  highlightActiveOpacity?: number;
  highlightUnderlayColor?: ViewStyle['backgroundColor'];
  image?: React.ReactElement;
  isDisabled?: boolean;
  onPress?: () => void | Promise<void> | false;
  onLongPress?: () => void | Promise<void> | false;
  onPressDetailAccessory?: () => void | Promise<void> | false;
  onUnHighlightRow?(): void;
  onHighlightRow?(): void;
  leftDetailColor?: TextStyle['color'];
  rightDetailColor?: TextStyle['color'];
  subtitleColor?: TextStyle['color'];
  subtitleTextStyle?: StyleProp<TextStyle>;
  testID?: string;
  title?: React.ReactNode;
  titleTextProps?: TextProps;
  titleTextStyle?: StyleProp<TextStyle>;
  titleTextStyleDisabled?: StyleProp<TextStyle>;
  titleTextColor?: TextStyle['color'];
  withSafeAreaView?: boolean;
}

const Cell: React.FC<CellInterface> = ({
  accessory = false,
  accessoryColor,
  accessoryColorDisclosureIndicator,
  allowFontScaling = true,
  backgroundColor,
  cellStyle = 'Basic',
  cellContentView,
  cellImageView,
  cellAccessoryView,
  children,
  contentContainerStyle = {},
  detail,
  detailTextStyle = {},
  detailTextProps = {},
  disableImageResize = false,
  highlightActiveOpacity = 0.8,
  highlightUnderlayColor,
  image,
  isDisabled = false,
  onPress,
  onLongPress,
  onPressDetailAccessory,
  onHighlightRow,
  onUnHighlightRow,
  leftDetailColor,
  rightDetailColor,
  subtitleColor,
  subtitleTextStyle = {},
  testID,
  title,
  titleTextProps = {},
  titleTextStyle = {},
  titleTextStyleDisabled = {},
  titleTextColor,
  withSafeAreaView = Platform.OS === 'ios'
    ? parseInt(`${Platform.Version}`, 10) <= 10
      ? false
      : true
    : true,
}: CellInterface) => {
  const theme = useContext(ThemeContext);

  const isPressable = !!onPress || !!onLongPress;

  /**
   * Merge styles with props
   * Type is a Hotfix
   */
  const localStyles = {
    ...styles,
    cellBackgroundColor: {
      backgroundColor: backgroundColor || theme.colors.background,
    },
    cell: [styles.cell, contentContainerStyle],
    cellSafeAreaContainer: styles.cellSafeAreaContainer,
    cellTitle: isDisabled
      ? [styles.cellTitle, styles.cellTextDisabled, titleTextStyleDisabled]
      : [
          styles.cellTitle,
          { color: titleTextColor || theme.colors.body },
          titleTextStyle,
        ],
    cellLeftDetail: [
      styles.cellLeftDetail,
      {
        color: leftDetailColor || theme.colors.primary,
      },
      detailTextStyle,
    ],
    cellLeftDetailTitle: isDisabled
      ? [styles.cellLeftDetailTitle, styles.cellTextDisabled]
      : [
          styles.cellLeftDetailTitle,
          { color: titleTextColor || theme.colors.body },
        ],
    cellRightDetail: [
      styles.cellRightDetail,
      {
        color: rightDetailColor || theme.colors.secondary,
      },
      detailTextStyle,
    ],
    cellSubtitle: [
      styles.cellSubtitle,
      {
        color: subtitleColor || theme.colors.body,
      },
      subtitleTextStyle,
    ],
    accessoryCheckmark: [
      styles.accessoryCheckmark,
      { borderColor: accessoryColor || theme.colors.primary },
    ],
    accessoryDetail: [
      styles.accessoryDetail,
      { borderColor: accessoryColor || theme.colors.primary },
    ],
    accessoryDetailText: [
      styles.accessoryDetailText,
      { color: accessoryColor || theme.colors.primary },
    ],
    accessoryDisclosureIndicator: [
      styles.accessoryDisclosureIndicator,
      { borderColor: accessoryColorDisclosureIndicator || theme.colors.muted },
    ],
  };

  const renderAccessoryDetail = (): React.ReactNode => {
    if (onPressDetailAccessory) {
      return (
        <TouchableOpacity
          style={localStyles.accessoryDetail}
          onPress={onPressDetailAccessory}
          activeOpacity={0.7}
          disabled={isDisabled}>
          <Text style={localStyles.accessoryDetailText}>i</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={localStyles.accessoryDetail}>
        <Text style={localStyles.accessoryDetailText}>i</Text>
      </View>
    );
  };
  /**
   * Render accessoryView
   * Currently available
   * @return {View} View with accessory
   */
  const renderAccessoryView = (): React.ReactNode => {
    switch (accessory) {
      case 'DisclosureIndicator':
        return (
          <View style={localStyles.cellAccessoryView}>
            <View style={localStyles.accessoryDisclosureIndicator} />
          </View>
        );
      case 'Detail':
        return (
          <View style={localStyles.cellAccessoryView}>
            {renderAccessoryDetail()}
          </View>
        );
      case 'DetailDisclosure':
        return (
          <View style={localStyles.cellAccessoryView}>
            <View style={localStyles.accessoryDetailDisclosure}>
              {renderAccessoryDetail()}
              <View style={localStyles.accessoryDisclosureIndicator} />
            </View>
          </View>
        );
      case 'Checkmark':
        return (
          <View style={localStyles.cellAccessoryView}>
            <View style={localStyles.accessoryCheckmark} />
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
  const renderImageView = (): React.ReactNode => {
    if (!image) {
      return null;
    }
    const imageStyleProp = (image?.props as ImageProps)?.style;
    const propsToAdd = {
      style: disableImageResize
        ? imageStyleProp
        : [imageStyleProp, localStyles.image],
    };
    return (
      <View style={localStyles.cellImageView}>
        {React.cloneElement(image, propsToAdd)}
      </View>
    );
  };

  /**
   * Render cell of type Basic
   * @return {View} View with Text and Accessory
   */
  const renderCellBasic = (): React.ReactNode => (
    <View style={localStyles.cellContentView}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={localStyles.cellTitle}
        {...titleTextProps}>
        {title}
      </Text>
    </View>
  );

  /**
   * Render cell of type RightDetail
   * @return {View} View with Text, Text and Accessory
   */
  const renderCellRightDetail = (): React.ReactNode => (
    <View style={localStyles.cellContentView}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={localStyles.cellTitle}
        {...titleTextProps}>
        {title}
      </Text>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={
          isDisabled
            ? [localStyles.cellRightDetail, localStyles.cellTextDisabled]
            : localStyles.cellRightDetail
        }
        {...detailTextProps}>
        {detail}
      </Text>
    </View>
  );

  /**
   * Render cell of type LeftDetail
   * @return {View} View with Text, Text and Accessory
   */
  const renderCellLeftDetail = (): React.ReactNode => (
    <View style={localStyles.cellContentView}>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={
          isDisabled
            ? [localStyles.cellLeftDetail, localStyles.cellTextDisabled]
            : localStyles.cellLeftDetail
        }
        {...detailTextProps}>
        {detail}
      </Text>
      <Text
        allowFontScaling={allowFontScaling}
        numberOfLines={1}
        style={localStyles.cellLeftDetailTitle}
        {...titleTextProps}>
        {title}
      </Text>
    </View>
  );

  /**
   * Render cell of type Subtitle
   * @return {View} View with View, Text, Text and Accessory
   */
  const renderCellSubtitle = (): React.ReactNode => (
    <View
      style={[
        localStyles.cellContentView,
        localStyles.cellContentViewTypeSubtitle,
      ]}>
      <View style={localStyles.cellInnerSubtitle}>
        <Text
          allowFontScaling={allowFontScaling}
          numberOfLines={1}
          style={localStyles.cellTitle}
          {...titleTextProps}>
          {title}
        </Text>
        <Text
          allowFontScaling={allowFontScaling}
          numberOfLines={1}
          style={
            isDisabled
              ? [localStyles.cellSubtitle, localStyles.cellTextDisabled]
              : localStyles.cellSubtitle
          }
          {...detailTextProps}>
          {detail}
        </Text>
      </View>
    </View>
  );

  /**
   * Renders correct contentView
   * @return {View} ContentView
   */
  const renderCellContentView = (): React.ReactNode => {
    switch (cellStyle) {
      case 'Basic':
        return renderCellBasic();
      case 'RightDetail':
        return renderCellRightDetail();
      case 'LeftDetail':
        return renderCellLeftDetail();
      case 'Subtitle':
        return renderCellSubtitle();
      default:
        return renderCellBasic();
    }
  };

  /**
   * Render content of cell
   * @return {View} Complete View with cell elements
   */
  const renderCell = (): React.ReactNode => {
    return (
      <View style={localStyles.cellBackgroundColor}>
        <View style={localStyles.cell}>
          {cellImageView || renderImageView()}
          {cellContentView || renderCellContentView()}
          {cellAccessoryView || renderAccessoryView()}
        </View>
        {children}
      </View>
    );
  };

  /**
   * Render content of cell with SafeAreaView
   * Inside view to prevent overwriting styles
   * @return {View} Complete View with cell elements
   */
  const renderCellWithSafeAreaView = (): React.ReactNode => (
    <SafeAreaView
      style={[
        localStyles.cellBackgroundColor,
        localStyles.cellSafeAreaContainer,
      ]}>
      <View style={localStyles.cell}>
        {cellImageView || renderImageView()}
        {cellContentView || renderCellContentView()}
        {cellAccessoryView || renderAccessoryView()}
      </View>
      {children}
    </SafeAreaView>
  );

  if (isPressable && !isDisabled) {
    return (
      <TouchableHighlight
        activeOpacity={highlightActiveOpacity}
        onPress={onPress}
        onLongPress={onLongPress}
        underlayColor={highlightUnderlayColor || theme.colors.body}
        onPressIn={onHighlightRow}
        onPressOut={onUnHighlightRow}
        testID={testID}>
        {withSafeAreaView ? renderCellWithSafeAreaView() : renderCell()}
      </TouchableHighlight>
    );
  }
  return (
    <View testID={testID}>
      {withSafeAreaView ? renderCellWithSafeAreaView() : renderCell()}
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    minHeight: PixelRatio.roundToNearestPixel(44),
    flexDirection: 'row',
  },
  // SafeAreaView only adds padding
  cellSafeAreaContainer: {
    flexGrow: 1,
  },
  cellContentView: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center',
    // independent from other cellViews
    paddingVertical: 10,
  },
  cellContentViewTypeSubtitle: {
    paddingVertical: 4,
  },
  cellInnerSubtitle: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  cellTitle: {
    fontSize: 16,
    letterSpacing: -0.32,
    flexGrow: 1,
  },
  cellLeftDetailTitle: {
    fontSize: 12,
    flexGrow: 1,
  },
  cellLeftDetail: {
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 5,
    width: 75,
  },
  cellRightDetail: {
    fontSize: 16,
    letterSpacing: -0.32,
    alignSelf: 'center',
    color: '#8E8E93',
  },
  cellSubtitle: {
    fontSize: 11,
    letterSpacing: 0.066,
  },
  cellTextDisabled: {
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
  accessoryDisclosureIndicator: {
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
  accessoryDetail: {
    width: 20,
    height: 20,
    marginLeft: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessoryDetailText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Georgia',
    letterSpacing: -0.24,
  },
  accessoryDetailDisclosure: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accessoryCheckmark: {
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

export default Cell;

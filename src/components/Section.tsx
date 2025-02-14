import React, { useContext, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Separator from './Separator';
import { CellInterface } from './Cell';
import { ThemeContext } from './Theme';

export interface SectionInterface {
  allowFontScaling?: boolean;
  children?: React.ReactNode;
  footerComponent?: React.ReactNode;
  headerComponent?: React.ReactNode;
  footer?: string;
  footerTextColor?: TextStyle['color'];
  footerTextStyle?: TextStyle;
  header?: string;
  headerTextColor?: TextStyle['color'];
  headerTextStyle?: TextStyle;
  hideSeparator?: boolean;
  hideSurroundingSeparators?: boolean;
  roundedCorners?: boolean;
  sectionPaddingBottom?: ViewStyle['paddingBottom'];
  sectionPaddingTop?: ViewStyle['paddingTop'];
  sectionTintColor?: ViewStyle['backgroundColor'];
  separatorInsetLeft?: ViewStyle['marginLeft'];
  separatorInsetRight?: ViewStyle['marginRight'];
  separatorTintColor?: ViewStyle['backgroundColor'];
  withSafeAreaView?: boolean;
}

const Section: React.FC<SectionInterface> = ({
  allowFontScaling = true,
  children,
  footerComponent,
  headerComponent,
  footer,
  footerTextColor,
  footerTextStyle = {},
  header,
  headerTextColor,
  headerTextStyle = {},
  hideSeparator = false,
  hideSurroundingSeparators = false,
  roundedCorners = false,
  sectionPaddingBottom = 15,
  sectionPaddingTop = 15,
  sectionTintColor,
  separatorInsetLeft = 15,
  separatorInsetRight = 0,
  separatorTintColor,
  separatorBackgroundColor,
  withSafeAreaView = Platform.OS === 'ios'
    ? parseInt(`${Platform.Version}`, 10) <= 10
      ? false
      : true
    : true,
}: SectionInterface) => {
  const theme = useContext(ThemeContext);
  const [highlightedRowIndex, setHighlightedRowIndex] = useState<number>();

  const highlightRow = (index: number): void => {
    setHighlightedRowIndex(index);
  };
  const unhighlightRow = (): void => {
    setHighlightedRowIndex(undefined);
  };

  /**
   * Merge styles with props
   */
  const localStyles = {
    ...styles,
    section: [
      styles.section,
      {
        backgroundColor: sectionTintColor,
        paddingBottom: sectionPaddingBottom,
        paddingTop: sectionPaddingTop,
      },
    ],
    sectionChildren: [
      styles.sectionChildren,
      roundedCorners && styles.sectionChildrenRoundedCorners,
    ],

    sectionheaderText: [
      styles.sectionheaderText,
      { color: headerTextColor || theme.colors.secondary },
      headerTextStyle,
    ],
    sectionfooterText: [
      styles.sectionfooterText,
      { color: footerTextColor || theme.colors.secondary },
      footerTextStyle,
    ],
  };

  // Need until .count is fixed: https://github.com/facebook/react/issues/7685
  const childrenWithoutEmpty = React.Children.toArray(children);
  const sumOfChildren = childrenWithoutEmpty.length;

  /**
   * Render Cell and add Border
   */
  const renderChild = (
    child: string | number | React.ReactNode,
    index: number,
  ): React.ReactNode => {
    if (!child) {
      return null;
    }
    if (!React.isValidElement(child)) {
      return null;
    }

    const propsToAdd = {
      onHighlightRow: (): void => highlightRow(index),
      onUnHighlightRow: unhighlightRow,
      sectionRoundedCorners: roundedCorners,
      isFirstChild: index === 0,
      isLastChild: index === sumOfChildren - 1,
    };

    const childProps = child?.props as CellInterface;

    // Skip rendering of separator
    if (
      hideSeparator ||
      !Array.isArray(children) ||
      sumOfChildren === 1 ||
      index === sumOfChildren - 1 ||
      childProps?.hideSeparator
    ) {
      return React.cloneElement(child, propsToAdd);
    }

    const invisibleSeparator =
      highlightedRowIndex === index || highlightedRowIndex === index + 1;

    // Add margin, if Image is provided
    let separatorInsetLeftSupportImage = separatorInsetLeft;
    // only update if separatorInsetLeft is default
    if (childProps?.image && separatorInsetLeft === 15) {
      separatorInsetLeftSupportImage = 60;
    }

    return (
      <View key={child?.key ?? undefined}>
        {React.cloneElement(child, propsToAdd)}
        <Separator
          isHidden={invisibleSeparator}
          backgroundColor={separatorBackgroundColor || childProps?.backgroundColor}
          tintColor={separatorTintColor}
          insetLeft={separatorInsetLeftSupportImage}
          insetRight={separatorInsetRight}
        />
      </View>
    );
  };

  /**
   * Render header if defined
   */
  const renderHeader = (): React.ReactNode | null => {
    if (header && withSafeAreaView) {
      return (
        <View style={styles.sectionheader}>
          <SafeAreaView>
            <Text
              allowFontScaling={allowFontScaling}
              style={localStyles.sectionheaderText}>
              {header}
            </Text>
          </SafeAreaView>
        </View>
      );
    }
    if (header) {
      return (
        <View style={styles.sectionheader}>
          <Text
            allowFontScaling={allowFontScaling}
            style={localStyles.sectionheaderText}>
            {header}
          </Text>
        </View>
      );
    }
    return null;
  };

  /**
   * Render footer if defined
   */
  const renderFooter = (): React.ReactNode | null => {
    if (footer && withSafeAreaView) {
      return (
        <View style={styles.sectionfooter}>
          <SafeAreaView>
            <Text
              allowFontScaling={allowFontScaling}
              style={localStyles.sectionfooterText}>
              {footer}
            </Text>
          </SafeAreaView>
        </View>
      );
    }
    if (footer) {
      return (
        <View style={styles.sectionfooter}>
          <Text
            allowFontScaling={allowFontScaling}
            style={localStyles.sectionfooterText}>
            {footer}
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={localStyles.section}>
      {headerComponent || renderHeader()}
      {hideSurroundingSeparators || (
        <Separator
          insetLeft={0}
          tintColor={separatorTintColor}
          withSafeAreaView={false}
        />
      )}
      <View style={localStyles.sectionChildren}>
        {childrenWithoutEmpty.map(renderChild)}
      </View>
      {hideSurroundingSeparators || (
        <Separator
          insetLeft={0}
          tintColor={separatorTintColor}
          withSafeAreaView={false}
        />
      )}
      {footerComponent || renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {},
  sectionChildren: {},
  sectionChildrenRoundedCorners: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  sectionheader: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  sectionheaderText: {
    fontSize: 13,
    letterSpacing: -0.078,
  },
  sectionfooter: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  sectionfooterText: {
    fontSize: 13,
    letterSpacing: -0.078,
  },
});

export default Section;

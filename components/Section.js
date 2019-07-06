import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Separator from './Separator';

class Section extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      highlightedRowIndex: undefined,
    };

    this.handleHighlightRow = index =>
      !this.state.highlightedRowIndex &&
      this.setState({ highlightedRowIndex: index });
    this.handleUnHighlightRow = () =>
      this.setState({ highlightedRowIndex: undefined });
  }
  render() {
    const {
      allowFontScaling,
      children,
      footerComponent,
      headerComponent,
      headerTextColor,
      hideSeparator,
      footerTextColor,
      sectionPaddingBottom,
      sectionPaddingTop,
      sectionTintColor,
      separatorInsetLeft,
      separatorInsetRight,
      separatorTintColor,
      withSafeAreaView,
    } = this.props;

    const header = this.props.header ? this.props.header : false;
    const footer = this.props.footer ? this.props.footer : false;

    /**
     * Merge styles with props
     */
    const _styles = {
      ...styles,
      section: [
        styles.section,
        {
          backgroundColor: sectionTintColor,
          paddingBottom: sectionPaddingBottom,
          paddingTop: sectionPaddingTop,
        },
      ],
      sectionheader__text: [
        styles.sectionheader__text,
        { color: headerTextColor },
      ],
      sectionfooter__text: [
        styles.sectionfooter__text,
        { color: footerTextColor },
      ],
    };

    // Need until .count is fixed: https://github.com/facebook/react/issues/7685
    const childrenWithoutEmpty = React.Children.toArray(children);
    const sumOfChildren = childrenWithoutEmpty.length;

    /**
     * Render Cell and add Border
     * @param  {Cell} child [description]
     * @param  {Int} index [description]
     * @return {View}       [description]
     */
    const renderChild = (child, index) => {
      if (!child) {
        return null;
      }
      const propsToAdd = {
        onHighlightRow: () => this.handleHighlightRow(index),
        onUnHighlightRow: this.handleUnHighlightRow,
      };

      // Skip rendering of separator
      if (
        hideSeparator ||
        !Array.isArray(children) ||
        sumOfChildren === 1 ||
        index === sumOfChildren - 1 ||
        child.props.hideSeparator
      ) {
        return React.cloneElement(child, propsToAdd);
      }

      const invisibleSeparator =
        this.state.highlightedRowIndex === index ||
        this.state.highlightedRowIndex === index + 1;

      // Add margin, if Image is provided
      let separatorInsetLeftSupportImage = separatorInsetLeft;
      // only update if separatorInsetLeft is default
      if (child.props.image && separatorInsetLeft === 15) {
        separatorInsetLeftSupportImage = 60;
      }

      return (
        <View key={child.key}>
          {React.cloneElement(child, propsToAdd)}
          <Separator
            isHidden={invisibleSeparator}
            backgroundColor={child.props.backgroundColor}
            tintColor={separatorTintColor}
            insetLeft={separatorInsetLeftSupportImage}
            insetRight={separatorInsetRight}
          />
        </View>
      );
    };

    /**
     * Render header if defined
     * @return {View} View with Text
     */
    const renderHeader = () => {
      if (header && withSafeAreaView) {
        return (
          <View style={styles.sectionheader}>
            <SafeAreaView>
              <Text
                allowFontScaling={allowFontScaling}
                style={_styles.sectionheader__text}>
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
              style={_styles.sectionheader__text}>
              {header}
            </Text>
          </View>
        );
      }
      return undefined;
    };

    /**
     * Render footer if defined
     * @return {View} View with Text
     */
    const renderFooter = () => {
      if (footer && withSafeAreaView) {
        return (
          <View style={styles.sectionfooter}>
            <SafeAreaView>
              <Text
                allowFontScaling={allowFontScaling}
                style={_styles.sectionfooter__text}>
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
              style={_styles.sectionfooter__text}>
              {footer}
            </Text>
          </View>
        );
      }
      return undefined;
    };

    return (
      <View style={_styles.section}>
        {headerComponent || renderHeader()}
        <Separator
          insetLeft={0}
          tintColor={separatorTintColor}
          withSafeAreaView={false}
        />
        {childrenWithoutEmpty.map(renderChild)}
        <Separator
          insetLeft={0}
          tintColor={separatorTintColor}
          withSafeAreaView={false}
        />
        {footerComponent || renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {},
  sectionheader: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  sectionheader__text: {
    fontSize: 13,
    letterSpacing: -0.078,
  },
  sectionfooter: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  sectionfooter__text: {
    fontSize: 13,
    letterSpacing: -0.078,
  },
});

Section.propTypes = {
  allowFontScaling: PropTypes.bool,
  children: PropTypes.node,
  footerComponent: PropTypes.element,
  headerComponent: PropTypes.element,
  footer: PropTypes.string,
  footerTextColor: PropTypes.string,
  header: PropTypes.string,
  headerTextColor: PropTypes.string,
  hideSeparator: PropTypes.bool,
  sectionPaddingBottom: PropTypes.number,
  sectionPaddingTop: PropTypes.number,
  sectionTintColor: PropTypes.string,
  separatorInsetLeft: PropTypes.number,
  separatorInsetRight: PropTypes.number,
  separatorTintColor: PropTypes.string,
  withSafeAreaView: PropTypes.bool,
};

Section.defaultProps = {
  allowFontScaling: true,
  children: null,
  footerComponent: null,
  headerComponent: null,
  footer: null,
  header: null,
  headerTextColor: '#6D6D72',
  hideSeparator: false,
  sectionPaddingBottom: 15,
  sectionPaddingTop: 15,
  sectionTintColor: '#EFEFF4',
  footerTextColor: '#6d6d72',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
  separatorTintColor: '#C8C7CC',
  withSafeAreaView:
    Platform.OS === 'ios'
      ? parseInt(Platform.Version, 10) <= 10
        ? false
        : true
      : true,
};

export default Section;

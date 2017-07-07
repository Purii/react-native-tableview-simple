/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

class Section extends Component {
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
    } = this.props;

    const header = this.props.header ? this.props.header : false;
    const footer = this.props.footer ? this.props.footer : false;

    /**
     * Merge styles with props
     */
    // eslint-disable-next-line no-underscore-dangle
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
      separator_inner: [
        styles.separator_inner,
        {
          backgroundColor: separatorTintColor,
          marginLeft: separatorInsetLeft,
          marginRight: separatorInsetRight,
        },
      ],
    };

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
        children.length === 1 ||
        index === children.length - 1
      ) {
        return React.cloneElement(child, propsToAdd);
      }

      // eslint-disable-next-line no-underscore-dangle
      let _localstyles = { ..._styles };

      _localstyles = {
        ..._localstyles,
        separator: [
          _localstyles.separator,
          {
            backgroundColor: child.props.backgroundColor,
          },
        ],
      };

      // Add margin, if Image is provided
      if (child.props.image) {
        _localstyles = {
          ..._localstyles,
          separator_inner: [
            _localstyles.separator_inner,
            {
              // Better way to priorize and keep defaultProp?
              marginLeft: separatorInsetLeft !== 15 ? separatorInsetLeft : 60,
            },
          ],
        };
      }

      const invisibleSeparator =
        this.state.highlightedRowIndex === index ||
        this.state.highlightedRowIndex === index + 1;

      if (invisibleSeparator) {
        _localstyles = {
          ..._localstyles,
          separator_inner: [
            _localstyles.separator_inner,
            {
              backgroundColor: 'transparent',
            },
          ],
        };
      }

      return (
        <View>
          {React.cloneElement(child, propsToAdd)}
          <View style={_localstyles.separator}>
            <View style={_localstyles.separator_inner} />
          </View>
        </View>
      );
    };

    /**
     * Render header if defined
     * @return {View} View with Text
     */
    const renderHeader = () => {
      if (header) {
        return (
          <View style={styles.sectionheader}>
            <Text
              allowFontScaling={allowFontScaling}
              style={_styles.sectionheader__text}
            >
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
      if (footer) {
        return (
          <View style={styles.sectionfooter}>
            <Text
              allowFontScaling={allowFontScaling}
              style={_styles.sectionfooter__text}
            >
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
        <View style={styles.section_inner}>
          {React.Children.map(children, renderChild)}
        </View>
        {footerComponent || renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {},
  section_inner: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C8C7CC',
  },
  sectionheader: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  sectionheader__text: {
    fontSize: 13,
  },
  sectionfooter: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  sectionfooter__text: {
    fontSize: 13,
  },
  separator: {},
  separator_inner: {
    height: StyleSheet.hairlineWidth,
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
};

Section.defaultProps = {
  allowFontScaling: true,
  children: null,
  footerComponent: null,
  headerComponent: null,
  footer: null,
  header: null,
  headerTextColor: '#6d6d72',
  hideSeparator: false,
  sectionPaddingBottom: 15,
  sectionPaddingTop: 15,
  sectionTintColor: '#EFEFF4',
  footerTextColor: '#6d6d72',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
  separatorTintColor: '#c8c7cc',
};

export default Section;

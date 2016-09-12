/* eslint-disable import/no-unresolved */
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
/* eslint-enable import/no-unresolved */

const Section = (props) => {
  /** Deprecation messages */
  // eslint-disable-next-line
  if (props.footerTintColor) {
    console.warn('`<Section footerTintColor="..."/>` is deprecated. Use `<Section footerTextColor="..."/>` instead.');
  }
  // eslint-disable-next-line
  if (props.headerTintColor) {
    console.warn('`<Section headerTintColor="..."/>` is deprecated. Use `<Section headerTextColor="..."/>` instead.');
  }

  const {
    allowFontScaling,
    children,
    headerTextColor,
    hideSeparator,
    footerTextColor,
    sectionTintColor,
    separatorInsetLeft,
    separatorInsetRight,
    separatorTintColor,
  } = props;
  const header = props.header ? props.header : false;
  const footer = props.footer ? props.footer : false;

  /* Declare and merge styles with props */
  const styleSection = [...{}, styles.section, { backgroundColor: sectionTintColor }];
  const styleSectionHeader__text = [...{}, styles.sectionheader__text, { color: headerTextColor }];
  const styleSectionFooter__text = [...{}, styles.sectionfooter__text, { color: footerTextColor }];
  const styleSeparatorInner = [...{}, styles.separator_inner, {
    backgroundColor: separatorTintColor,
    marginLeft: separatorInsetLeft,
    marginRight: separatorInsetRight,
  }];

  /**
   * Render Cell and add Border
   * @param  {Cell} child [description]
   * @param  {Int} index [description]
   * @return {View}       [description]
   */
  const renderChild = (child, index) => {
    if (children.length > 0 && index < children.length - 1) {
      const styleSeparator = [
        ...{},
        styles.separator,
        { backgroundColor: child.props.backgroundColor },
      ];
      const renderSeparator = () => {
        if (hideSeparator) { return null; }
        return (
          <View style={styleSeparator}>
            <View style={styleSeparatorInner} />
          </View>
          );
      };

      return (
        <View>
          {child}
          {renderSeparator()}
        </View>
      );
    }
    return child;
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
            style={styleSectionHeader__text}
          >
            {header}
          </Text>
        </View>
      );
    }
    return null;
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
            style={styleSectionFooter__text}
          >
            {footer}
          </Text>
        </View>
      );
    }
    return null;
  };
  return (
    <View style={styleSection}>
      {props.headerComponent || renderHeader()}
      <View style={styles.section_inner}>
        {React.Children.map(children, renderChild)}
      </View>
      {props.footerComponent || renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  section_inner: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7cc',
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
  separator: {
  },
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
  sectionTintColor: PropTypes.string,
  separatorInsetLeft: PropTypes.number,
  separatorInsetRight: PropTypes.number,
  separatorTintColor: PropTypes.string,
};

Section.defaultProps = {
  allowFontScaling: true,
  headerTextColor: '#6d6d72',
  hideSeparator: false,
  sectionTintColor: '#EFEFF4',
  footerTextColor: '#6d6d72',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
  separatorTintColor: '#c8c7cc',
};

export default Section;

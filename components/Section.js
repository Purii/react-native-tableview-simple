/* eslint-disable consistent-return */
import React, {
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Section = (props) => {
  const {
    children,
    headerTintColor,
    hideSeparator,
    footerTintColor,
    sectionTintColor,
    separatorInsetLeft,
    separatorInsetRight,
    separatorTintColor,
  } = props;
  const header = props.header ? props.header : false;
  const footer = props.footer ? props.footer : false;

  /* Declare and merge styles with props */
  const styleSection = [...{}, styles.section, { backgroundColor: sectionTintColor }];
  const styleSectionHeader__text = [...{}, styles.sectionheader__text, { color: headerTintColor }];
  const styleSectionFooter__text = [...{}, styles.sectionfooter__text, { color: footerTintColor }];
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
      const styleSeparator = [...{}, styles.separator, { backgroundColor: child.props.cellTintColor }];
      const renderSeparator = () => {
        if (hideSeparator) { return; }
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
   * @return {View}
   */
  const renderHeader = () => {
    if (header) {
      return (
        <View style={styles.sectionheader}>
          <Text style={styleSectionHeader__text}>{header}</Text>
        </View>
      );
    }
    return;
  };

  /**
   * Render footer if defined
   * @return {View}
   */
  const renderFooter = () => {
    if (footer) {
      return (
        <View style={styles.sectionfooter}>
          <Text style={styleSectionFooter__text}>{footer}</Text>
        </View>
      );
    }
    return;
  };
  return (
    <View style={styleSection}>
      {renderHeader()}
      <View style={styles.section_inner}>
        {React.Children.map(children, renderChild)}
      </View>
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  section_inner: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
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
    height: 0.5,
  },
});


Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  footer: PropTypes.string,
  footerTintColor: PropTypes.string,
  header: PropTypes.string,
  headerTintColor: PropTypes.string,
  hideSeparator: PropTypes.bool,
  sectionTintColor: PropTypes.string,
  separatorInsetLeft: PropTypes.number,
  separatorInsetRight: PropTypes.number,
  separatorTintColor: PropTypes.string,
};

Section.defaultProps = {
  headerTintColor: '#6d6d72',
  hideSeparator: false,
  sectionTintColor: '#EFEFF4',
  footerTintColor: '#6d6d72',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
  separatorTintColor: '#c8c7cc',
};

export default Section;

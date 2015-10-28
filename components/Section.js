import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';

export default class Section extends Component {
  render() {
    const {children} = this.props;
    const header = this.props.header ? this.props.header : false;
    const footer = this.props.footer ? this.props.footer : false;
    const sectionTintColor = this.props.sectionTintColor;
    const headerTintColor = this.props.headerTintColor;
    const footerTintColor = this.props.footerTintColor;
    const separatorTintColor = this.props.separatorTintColor;
    const separatorInsetLeft = this.props.separatorInsetLeft;
    const separatorInsetRight = this.props.separatorInsetRight;

    /* Set styles */
    const styleSection = [...{}, styles.section, { backgroundColor: sectionTintColor}];
    const styleSectionHeader = [...{}, styles.sectionheader, { color: headerTintColor}];
    const styleSectionFooter = [...{}, styles.sectionfooter, { color: footerTintColor}];
    const styleSeparatorInner = [...{}, styles.separator_inner, {
      backgroundColor: separatorTintColor,
      marginLeft: separatorInsetLeft,
      marginRight: separatorInsetRight
    }];

    /**
     * Render Cell and add Border
     * @param  {Cell} child [description]
     * @param  {Int} index [description]
     * @return {View}       [description]
     */
    let renderChild = (child, index) => {
      if(children.length > 0 && index < children.length - 1) {
        const styleSeparator = [...{}, styles.separator, {backgroundColor: child.props.cellTintColor}]
        return(
          <View>
            {child}
            <View style={styleSeparator}>
              <View style={styleSeparatorInner}></View>
            </View>
          </View>
        )
      }
      return child;
    }

    /**
     * Render header if defined
     * @return {View}
     */
    let renderHeader = () => {
      if(header) {
        return(<Text style={styleSectionHeader}>{header}</Text>);
      } 
      return;
    }

    /**
     * Render footer if defined
     * @return {View}
     */
    let renderFooter = () => {
      if(footer) {
        return(<Text style={styleSectionFooter}>{footer}</Text>);
      } 
      return;
    }
    return(
      <View style={styleSection}>
        {renderHeader()}
        <View style={styles.section_inner}>
          {React.Children.map(children, renderChild)}
        </View>
        {renderFooter()}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  'section': {
    paddingTop: 15,
    paddingBottom: 15,
  },
  'section_inner': {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#c8c7cc',
  },
  'sectionheader': {
    fontSize: 13,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  'sectionfooter': {
    fontSize: 13,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  'separator': {
  },
  'separator_inner': {
    height: 0.5,
  },
});


Section.propTypes = {
  header: PropTypes.string,
  footer: PropTypes.string,
  sectionTintColor: PropTypes.string,
  separatorTintColor: PropTypes.string,
  separatorInsetLeft: PropTypes.number,
  separatorInsetRight: PropTypes.number,
  headerTintColor: PropTypes.string,
  footerTintColor: PropTypes.string,
}

Section.defaultProps = {
  sectionTintColor: '#EFEFF4',
  headerTintColor: '#6d6d72',
  footerTintColor: '#6d6d72',
  separatorTintColor: '#c8c7cc',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
}

import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
    const hideSeparator = this.props.hideSeparator;
    /* Set styles */
    const styleSection = [...{}, styles.section, { backgroundColor: sectionTintColor}];
    const styleSectionHeader__text = [...{}, styles.sectionheader__text, { color: headerTintColor}];
    const styleSectionFooter__text = [...{}, styles.sectionfooter__text, { color: footerTintColor}];
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
      if (children.length > 0 && index < children.length - 1) {
        const styleSeparator = [...{}, styles.separator, {backgroundColor: child.props.cellTintColor}];

        let renderSeparator = () => {
          if (hideSeparator) { return; }
          return (
            <View style={styleSeparator}>
              <View style={styleSeparatorInner}></View>
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
    let renderHeader = () => {
      if (header) {
        return (<View style={styles.sectionheader}><Text style={styleSectionHeader__text}>{header}</Text></View>);
      }
      return;
    };

    /**
     * Render footer if defined
     * @return {View}
     */
    let renderFooter = () => {
      if (footer) {
        return (<View style={styles.sectionfooter}><Text style={styleSectionFooter__text}>{footer}</Text></View>);
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
  }
}

const styles = StyleSheet.create({
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },
  'sectionheader__text': {
    fontSize: 13,
  },
  'sectionfooter': {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },
  'sectionfooter__text': {
    fontSize: 13,
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
  hideSeparator: PropTypes.bool
};

Section.defaultProps = {
  sectionTintColor: '#EFEFF4',
  headerTintColor: '#6d6d72',
  footerTintColor: '#6d6d72',
  separatorTintColor: '#c8c7cc',
  separatorInsetLeft: 15,
  separatorInsetRight: 0,
  hideSeparator: false
};

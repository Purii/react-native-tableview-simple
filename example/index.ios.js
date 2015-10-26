import React, { AppRegistry, Component, PropTypes, StyleSheet, ScrollView, View, Text } from 'react-native';
import {TableView, Section, Cell} from 'react-native-tableview-simple';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 class Example extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellstyle="Basic" title="Basic"/>
            <Cell cellstyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="DISABLED">
            <Cell cellstyle="Basic" isDisabled="true" title="Basic"/>
            <Cell cellstyle="RightDetail" isDisabled="true" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" isDisabled="true" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" isDisabled="true" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" isDisabled="true" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="ACCESSORY">
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Basic"/>
            <Cell cellstyle="RightDetail" accessory="DisclosureIndicator" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" accessory="DisclosureIndicator" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" accessory="DisclosureIndicator" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Pressable w/ accessory" onPress={() => {console.log('Heyho!')}}/>
          </Section>
        </TableView>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

AppRegistry.registerComponent('example', () => Example);

import React, { AppRegistry, Component, PropTypes, StyleSheet, ScrollView, View, Text } from 'react-native';
import {TableView, Section, Cell} from 'react-native-tableview-simple';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 class Example extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
         <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
        <TableView>
          <Section header="Header" footer="Footer">
            <Cell cellstyle="Basic" title="Title"/>
            <Cell cellstyle="Basic" title="Title"/>
            <Cell cellstyle="RightDetail" title="Title" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="Title" detail="Detail"/>
            <Cell cellstyle="Subtitle" title="Subtitle" detail="Nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo Linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" title="Disabled" isDisabled="true"/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="Header">
            <Cell cellstyle="Basic" title="Title"/>
            <Cell cellstyle="Basic" title="Title"/>
            <Cell cellstyle="RightDetail" title="Title" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="Title" detail="Detail"/>
            <Cell cellstyle="Subtitle" title="Subtitle" detail="Nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo Linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" title="Disabled" isDisabled="true"/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
        </TableView>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('example', () => Example);

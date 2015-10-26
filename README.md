# react-native-tableview-simple
[![npm version](http://img.shields.io/npm/v/react-native-tableview-simple.svg?style=flat-square)](https://www.npmjs.com/package/react-native-tableview-simple)

**NOTE: This component is WIP. Use it with caution!**

This component is a copy of the iOS-TableView made with pure CSS.
It is not intended to display large datasets!
A use case might be something like a settingsscreen, with a few rows.

## Installation
1. `npm i react-native-tableview-simple --save`
1. Add components `import {TableView, Section, Cell} from 'react-native-tableview-simple'`

## Extensible
This component provides you with some predefined CSS-styles, inspired by the native TableView.
You can always mix the `Cell`-instances inside a `Section`, with some Custom-Components.   
Therefore the `Cell`-Component itself can't be manipulated. If you aren't satisfied with a component, feel free to create a PR or just create and use a custom component. Get inspired by the predefined cellstyles.

### Submit a Cell-Component
Maybe you want to add your lovely designed Cell-Component to the project.
Just move your component to the folder `components` and choose a meaningful name! :-)

## Props
### TableView
Currently `TableView` doesn't provide any properties.

### Section
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| header | - | `string` | Header value |
| footer | - | `string` | Footer value |
| sectionTintColor | #EFEFF4 | `string` | Background color of section |
| headerTintColor | #6d6d72 | `string` | Text color of header |
| footerTintColor | #6d6d72 | `string` | Text color of footer|

### Cell
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| cellstyle | Basic | `string` | Predefined styles: `Basic`, `RightDetail`, `LeftDetail`, `Subtitle` |
| title | - | `string` | Title value |
| detail | - | `string` | Detail value |
| isDisabled | false | `bool` | Cell is disabled. `onPress` will not get triggered |
| accessory | - | `string` | Predefined accessory: `DisclosureIndicator` |
| onPress | - | `func` | If set, cell will be automaticaly initialized with TouchableHighlight |
| cellTintColor | #fff | `string` | Background color of cell |
| titleTintColor | #000 | `string` | Text color of title |

## Example
The left screen is build using `react-native-tableview-simple`. The right one is native.

| `react-native-tableview-simple` | Native iOS |
| :------------: | :---------------: |
| ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshot.png) | ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotNative.png) |

```javascript
import React, { AppRegistry, Component, PropTypes, StyleSheet, ScrollView, View, Text, ActivityIndicatorIOS, SwitchIOS } from 'react-native';
import {TableView, Section, Cell, CustomCell} from 'react-native-tableview-simple';

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
            <Cell cellstyle="Basic" isDisabled={true} title="Basic"/>
            <Cell cellstyle="RightDetail" isDisabled={true} title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" isDisabled={true} title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" isDisabled={true} title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" isDisabled={true} title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="ACCESSORY">
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Basic"/>
            <Cell cellstyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="CUSTOMCELLS">
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Loading</Text>
              <ActivityIndicatorIOS/>
            </CustomCell>
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Switch</Text>
              <SwitchIOS/>
            </CustomCell>
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

```

# react-native-tableview-simple
[![Build Status](https://travis-ci.org/Purii/react-native-tableview-simple.svg?branch=master)](https://travis-ci.org/Purii/react-native-tableview-simple)
[![npm version](http://img.shields.io/npm/v/react-native-tableview-simple.svg?style=flat)](https://www.npmjs.com/package/react-native-tableview-simple)
[![npm](https://img.shields.io/npm/dm/react-native-tableview-simple.svg)]()

This cross-platform component is a copy of the iOS-TableView made with pure CSS. The intention is to provide **a flexible and lightweight alternative to a bridged component**.
The focus is set on the presentation. The component is therefore not intended to render large data sets.
A possible use case might be an about- or a settings-screen with a few rows.   
Have a look at the [Examples below](https://github.com/Purii/react-native-tableview-simple#examples)! :-)

## Installation
1. `npm i react-native-tableview-simple --save`
1. Add components `import {Cell, Section, TableView} from 'react-native-tableview-simple'`

## Extensible
This component provides you with some predefined CSS-styles, inspired by the native TableView.
You can always mix the `Cell`-instances inside a `Section`, with some Custom-Components.   
Therefore the `Cell`-Component itself can't be manipulated. If you aren't satisfied with a component, feel free to create a PR or just create and use a custom component. Get inspired by the predefined cellstyles.

### Submit a Cell-Component
Maybe you want to add your lovely designed Cell-Component to the project.
Just move your component to the folder `components` and choose a meaningful name! :-)

## Props
### TableView
Currently `TableView` doesn't support any properties.

### Section
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| footer | - | `string` | Footer value |
| footerTintColor | #6d6d72 | `string` | Text color of footer|
| header | - | `string` | Header value |
| headerTintColor | #6d6d72 | `string` | Text color of header |
| hideSeparator | false | `bool` | Hide separators |
| sectionTintColor | #EFEFF4 | `string` | Background color of section |
| separatorInsetLeft | 15 | `number` | Left inset of separator |
| separatorInsetRight | 0 | `number` | Right inset of separator |
| separatorTintColor | #c8c7cc | `string` | Color of separator |
| headerTextStyle | - | {key: value} | Header text style |
| footerTextStyle | - | {key: value} | Footer text style |

Example of a headerTextStyle/footerTextStyle
```
var styles = StyleSheet.create({
  // Can have other styles
  sectionTextStyle: {
    fontSize: 40,
    color: 'green',
  }
});

render() {
  return (
    <TableView>
      <Section header="Header text" 
        footer="Footer text" headerTextStyle={[styles.sectionTextStyle]}
        footerTextStyle={[styles.sectionTextStyle]}>
        //render the cells/custom cells
      </Section>
    </TableView>
  );
}
```

### Cell
The cellstyles are inspired by the native ones. Just like the available accessories.

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| accessory | - | `string` | Predefined accessory: `DisclosureIndicator`, `Detail`, `DetailDisclosure`, `Checkmark` |
| accessoryColor | #007AFF | `string` | Color of accessory |
| allowFontScaling | true | `bool` | Respect Text Size accessibility setting on iOS |
| cellstyle | Basic | `string` | Predefined styles: `Basic`, `RightDetail`, `LeftDetail`, `Subtitle` |
| cellTintColor | #fff | `string` | Background color of cell |
| detail | - | `string` or `number` | Detail value |
| highlightActiveOpacity | 0.8 | `number` | Opacity of cell when touch is active |
| highlightUnderlayColor | black | `string` | Color of underlay that will show through when touch is active |
| isDisabled | false | `bool` | Cell is disabled. `onPress` will not get triggered |
| leftDetailColor | #007AFF | `string` | Text color of left detail |
| title | - | `string` or `number` | Title value |
| titleTintColor | #000 | `string` | Text color of title |
| onPress | - | `func` or `false` | If set, cell will be automaticaly initialized with TouchableHighlight |

### CustomCell
CustomCells allow you to define the whole content on your own.
This makes it possible to use components like `ActivityIndicatorIOS` or `SwitchIOS` as seen in the example below.

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| cellHeight | 44 | `number` | Set cell height |
| cellTintColor | #fff | `string` | Background color of cell |
| highlightActiveOpacity | 0.8 | `number` | Opacity of cell when touch is active |
| highlightUnderlayColor | black | `string` | Color of underlay that will show through when touch is active |
| isDisabled | false | `bool` | Cell is disabled. `onPress` will not get triggered |
| onPress | - | `func` or `false` | If set, cell will be automaticaly initialized with TouchableHighlight |

## Examples
The following examples can be found in the folder `example`.   
To run the example project, follow these steps:

1. `git clone https://github.com/Purii/react-native-tableview-simple`
1. `cd example`
1. `npm i`
1. run `/example/ios/example.xcodeproj` via Xcode

### Use case: About-screen

![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotAboutScreen.png)

```javascript
import React, {
  ActivityIndicatorIOS,
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  SwitchIOS,
  Text,
  View
} from 'react-native';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

class Example extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <View style={{
            backgroundColor: '#37474F',
            height: 500,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <View style={{
              backgroundColor: '#ffc107',
              width: 80,
              height: 80,
              borderRadius: 10
            }}></View>
          </View>
          <TableView>
            <Section footer="All rights reserved.">
              <Cell title="Help / FAQ" titleTintColor="#007AFF" onPress={() => console.log('open Help/FAQ')}/>
              <Cell title="Contact Us" titleTintColor="#007AFF" onPress={() => console.log('open Contact Us')}/>
            </Section>
          </TableView>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1
  },
});

AppRegistry.registerComponent('example', () => Example);
```

### `react-native-tableview-simple` vs. Native iOS
The left screen is build using `react-native-tableview-simple`. The right one is native.

| `react-native-tableview-simple` | Native iOS |
| :------------: | :---------------: |
| ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshot.png) | ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotNative.png) |

```javascript
import React, {
  ActivityIndicatorIOS,
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  SwitchIOS,
  Text,
  View
} from 'react-native';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

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
            <Cell cellstyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')}/>
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
            <Cell cellstyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log('Heyho!')}/>
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

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

AppRegistry.registerComponent('example', () => Example);

```

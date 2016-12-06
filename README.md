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
| allowFontScaling | true | `bool` | Respect Text Size accessibility setting on iOS |
| footerComponent | - | `React.Component` | Inject any component to replace original footer (optional) |
| headerComponent | - | `React.Component` | Inject any component to replace original header (optional) |
| footer | - | `string` | Footer value |
| footerTextColor | #6d6d72 | `string` | Text color of footer|
| header | - | `string` | Header value |
| headerTextColor | #6d6d72 | `string` | Text color of header |
| hideSeparator | false | `bool` | Hide separators |
| sectionTintColor | #EFEFF4 | `string` | Background color of section |
| separatorInsetLeft | 15 | `number` | Left inset of separator |
| separatorInsetRight | 0 | `number` | Right inset of separator |
| separatorTintColor | #c8c7cc | `string` | Color of separator |

### Cell
The cellstyles are inspired by the native ones. Just like the available accessories.
To set a fixed height use `contentContainerStyle={{ height: 44 }}`.

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| accessory | - | `string` | Predefined accessory: `DisclosureIndicator`, `Detail`, `DetailDisclosure`, `Checkmark` |
| accessoryColor | #007AFF | `string` | Color of accessory |
| allowFontScaling | true | `bool` | Respect Text Size accessibility setting on iOS |
| backgroundColor | #fff | `string` | Background color of cell |
| cellStyle | Basic | `string` | Predefined styles: `Basic`, `RightDetail`, `LeftDetail`, `Subtitle` |
| contentContainerStyle | {} | `View.propTypes.style` | These styles will be applied to the content container which wraps all of the child views. Overrides `cellStyle` |
| detail | - | `string` or `number` | Detail value |
| highlightActiveOpacity | 0.8 | `number` | Opacity of cell when touch is active |
| highlightUnderlayColor | black | `string` | Color of underlay that will show through when touch is active |
| isDisabled | false | `bool` | Cell is disabled. `onPress` will not get triggered |
| leftDetailColor | #007AFF | `string` | Text color of left detail |
| rightDetailColor | #8E8E93 | `string` | Text color of right detail |
| title | - | `string` or `number` | Title value |
| titleTextColor | #000 | `string` | Text color of title |
| onPress | - | `func` or `false` | If set, cell will be automaticaly initialized with TouchableHighlight |

### CustomCell
While the `Cell` component is intended as reproduction of the original cell known from the `UITableView`, the `CustomCell` could be customized at the most.
Use a `CustomCell` to define the whole content and its structure on your own. Pass any component as a children to a `CustomCell`. Have a look at the example below, which uses `ActivityIndicator` and `Switch`.

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| contentContainerStyle | {} | `View.propTypes.style` | These styles will be applied to the content container which wraps all of the child views |
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
  Component
} from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Cell,
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
              <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')}/>
              <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')}/>
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
  Component,
} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  ScrollView,
  StyleSheet,
  Switch,
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
            <Cell cellStyle="Basic" title="Basic"/>
            <Cell cellStyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellStyle="LeftDetail" title="LeftDetail" detail="Detail"/>
            <Cell cellStyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellStyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="DISABLED">
            <Cell cellStyle="Basic" isDisabled={true} title="Basic"/>
            <Cell cellStyle="RightDetail" isDisabled={true} title="RightDetail" detail="Detail" />
            <Cell cellStyle="LeftDetail" isDisabled={true} title="LeftDetail" detail="Detail"/>
            <Cell cellStyle="Subtitle" isDisabled={true} title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" isDisabled={true} title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="ACCESSORY">
            <Cell cellStyle="Basic" accessory="DisclosureIndicator" title="Basic"/>
            <Cell cellStyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
            <Cell cellStyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail"/>
            <Cell cellStyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellStyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="CUSTOMCELLS">
            <CustomCell contentContainerStyle={{ height: 44 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>Loading</Text>
              <ActivityIndicator />
            </CustomCell>
            <CustomCell contentContainerStyle={{ height: 44 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>Switch</Text>
              <Switch />
            </CustomCell>
            <CustomCell contentContainerStyle={{ height: 60 }}>
              <Text style={{ flex: 1, fontSize: 16 }}>Custom height</Text>
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

## Todo
* Support an `image`-Prop

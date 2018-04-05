# react-native-tableview-simple
[![Build Status](https://travis-ci.org/Purii/react-native-tableview-simple.svg?branch=master)](https://travis-ci.org/Purii/react-native-tableview-simple)
[![npm version](http://img.shields.io/npm/v/react-native-tableview-simple.svg?style=flat)](https://www.npmjs.com/package/react-native-tableview-simple)
[![npm](https://img.shields.io/npm/dm/react-native-tableview-simple.svg)](https://www.npmjs.com/package/react-native-tableview-simple)
[![Package Quality](http://npm.packagequality.com/shield/react-native-tableview-simple.svg)](http://packagequality.com/#?package=react-native-tableview-simple)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Purii/react-native-tableview-simple/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-Patreon-green.svg)](https://www.patreon.com/purii)

If you like my component and want to buy me a coffee, checkout my [Patreon page](https://www.patreon.com/purii) – Thanks!

This cross-platform component is inspired by the iOS-TableView. Made with pure CSS, the intention is to provide **a flexible and lightweight alternative to a bridged component**.

A possible use case might be an about- or a settings-screen with a few rows.
For displaying long datalists it is recommended to use the `FlatList` Component together with `Cell` and `Separator` Components. ([see example](#render-with-flatlist))

![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotStandard.png)

Have a look at the [examples below](https://github.com/Purii/react-native-tableview-simple#examples)! :-)

* [Installation](#installation)
* [Extensible](#extensible)
* [Props](#props): [`TableView`](#tableview) [`Cell`](#cell) [`Section`](#section) [`Separator`](#separator)
* [Examples](#examples)
* [Try it out](#try-it-out)

## Installation

1. *Install as dependency:*
  ```sh
  // yarn
  yarn add react-native-tableview-simple
  // or npm
  npm i react-native-tableview-simple --S
  ```

2. *Add needed components:*
  ```javascript
  import {
    Cell, 
    Section,
    TableView,
  } from 'react-native-tableview-simple';
```

## Extensible
`react-native-tableview-simple` provides you with some predefined CSS-styles, inspired by the native TableView.
You can always mix the `Cell`-instances inside a `Section`, with other (React-Native)-Views.   
Therefore the `Cell`-Component itself can't be manipulated heavily.

*If you aren't satisfied with a component, feel free to create a PR or just create and use a custom component.*

### Submit a Custom `Cell`-Component
Maybe you want to add your lovely designed `Cell`-Component to the project.
Just move your component to the folder `components` and choose a meaningful name! :-)    

## Props

* [`TableView`](#tableview)
* [`Cell`](#cell)
* [`Section`](#section)
* [`Separator`](#separator)

### `TableView`
Currently `TableView` doesn't support any properties.

### `Section`
The `Section` component is needed to render the `Cells` together with `Separators`.
It's possible to use the `Flatlist` component instead ([Example](#render-with-flatlist)).

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| allowFontScaling | `true` | `bool` | Respect Text Size accessibility setting on iOS |
| footerComponent | - | `React.Component` | Inject any component to replace original footer (optional) |
| headerComponent | - | `React.Component` | Inject any component to replace original header (optional) |
| footer | - | `string` | Footer value |
| footerTextColor | `#6d6d72` | `string` | Text color of footer|
| header | - | `string` | Header value |
| headerTextColor | `#6d6d72` | `string` | Text color of header |
| hideSeparator | `false` | `bool` | Hide separators |
| sectionPaddingBottom | `15` | `number` | Padding bottom of section |
| sectionPaddingTop | `15` | `number` | Padding top of section |
| sectionTintColor | `#EFEFF4` | `string` | Background color of section |
| separatorInsetLeft | `15` | `number` | Left inset of separator |
| separatorInsetRight | `0` | `number` | Right inset of separator |
| separatorTintColor | `#C8C7CC` | `string` | Color of separator |

### `Cell`
The style of the `Cell` component is inspired by the native `UITableView`.
Because the `Cell` component is created with CSS only, its highly flexible.
The content of the cell is separated in three views, which can all be modified via `props`: `cellImageView` | `cellContentView` | `cellAccessoryView`.

To get an idea what you can modify via `props`, have a look at the [examples below](https://github.com/Purii/react-native-tableview-simple#examples).

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| accessory | - | `string` | Predefined accessory: `DisclosureIndicator`, `Detail`, `DetailDisclosure`, `Checkmark` |
| accessoryColor | `#007AFF` | `string` | Color of accessory |
| allowFontScaling | `true` | `bool` | Respect Text Size accessibility setting on iOS |
| backgroundColor | `#FFF` | `string` | Background color of cell |
| cellStyle | `Basic` | `string` | Predefined styles: `Basic`, `RightDetail`, `LeftDetail`, `Subtitle` |
| cellAccessoryView | - | `React.Component` | Replace accessory view component (*e.g.: add Switch or ActivityIndicator*) |
| cellContentView | - | `React.Component` | Replace content view component |
| cellImageView | - | `React.Component` | Replace image view component |
| contentContainerStyle | `{}` | `View.propTypes.style` | These styles will be applied to the content container which wraps all of the child views. Overrides `cellStyle` (*e.g.: Override paddingLeft and paddingRight or set fixed height*) |
| detail | - | `string` or `number` | Detail value |
| detailTextStyle | `{}` | `Text.propTypes.style` | These styles will be applied to the (left- / right-) detail `Text`-Component. |
| disableImageResize | `false` | `bool` | Disable resizing of image |
| hideSeparator | `false` | `bool` | Hide the following `Separator`-Component |
| highlightActiveOpacity | `0.8` | `number` | Opacity of cell when touch is active |
| highlightUnderlayColor | `black` | `string` | Color of underlay that will show through when touch is active |
| isDisabled | `false` | `bool` | Cell is disabled. `onPress` will not get triggered |
| image | - | `React.Component (Image)` | Image component displayed on the left. Will resized automatically |
| leftDetailColor | `#007AFF` | `string` | Text color of left detail |
| rightDetailColor | `#8E8E93` | `string` | Text color of right detail |
| subtitleColor | `#000` | `string` | Text color of subtitle |
| subtitleTextStyle | `{}` | `Text.propTypes.style` | These styles will be applied to the subtitle `Text`-Component. |
| title | - | `string` or `number` or `React.Component` | Title value |
| titleTextColor | `#000` | `string` | Text color of title |
| titleTextStyle | `{}` | `Text.propTypes.style` | These styles will be applied to the title `Text`-Component (*e.g.: update `fontSize` or `fontFamily`*) |
| titleTextStyleDisabled | `{}` | `Text.propTypes.style` | These styles will be applied to the title  `Text`-Component, when the cell is disabled |
| onPress | - | `func` or `false` | If set, cell will be automaticaly initialized with TouchableHighlight |


#### Wrap `Cell`
Sometimes custom `Cell` components are needed.
By creating new component, which is based on `Cell`, its only necessary to set the props once.


```javascript
...

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

const CellVariant = (props) => (
  <Cell
    {...props}
    cellContentView={
      <View
        style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
      >
        <Text
          allowFontScaling
          numberOfLines={1}
          style={{ flex: 1, fontSize: 20 }}
        >
          {props.title}
        </Text>
      </View>
    }
  />
);

...

<TableView>
  <Section>
    <CellVariant title="Element 1" />
    <CellVariant title="Element 2" />
    <CellVariant title="Element 3" />
    <CellVariant title="Element 4" />
  </Section>
</TableView>

...
```

### `Separator`
In general the `Separator` component is used internally by the `Section` component.
But additionally this component can be used together with `FlatList`.
See the [example below](#render-with-flatlist).

| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| backgroundColor | `#EFEFF4` | `string` | Background color |
| insetLeft | `15` | `number` | Left inset of separator |
| insetRight | `0` | `number` | Right inset of separator |
| isHidden | `false` | `bool` | Hide separator but keeping its height |
| tintColor | `#C8C7CC` | `string` | Color of separator |

## Examples
The following examples can be found in the folder `example`.   
To run the example project, follow these steps:

1. `git clone https://github.com/Purii/react-native-tableview-simple`
1. `cd example`
1. `yarn` or `npm i`
1. run `/example/ios/example.xcodeproj` via Xcode

* [Quick look](#quick-look)
* [Use case: About-screen](#use-case-about-screen)
* [Complete example / vs. native iOS](#react-native-tableview-simple-vs-native-ios)
* [Render with `FlatList`](#render-with-flatlist)

### Quick look

```javascript

// ActivityIndicator as accessory
  <Cell
    title="Switch"
    cellAccessoryView={<Switch />}
    contentContainerStyle={{ paddingVertical: 4 }} // Adjust height
  />

// Switch as accessory
  <Cell
    title="ActivityIndicator"
    cellAccessoryView={<ActivityIndicator />}
  />

// TextInput
  <Cell
    cellContentView={<TextInput style={{fontSize: 16, flex: 1}} placeholder="TextInput"/>}
  />

// Image
  <Cell
    title="Image"
    image={
      <Image
        style={{ borderRadius: 5 }}
        source={{
          uri: 'https://facebook.github.io/react/img/logo_og.png',
        }}
      />
    }
  />
```

### Use case: About-screen

![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotAboutScreen.png)

```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

export default class App extends Component<{}> {
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
```


### `react-native-tableview-simple` vs. Native iOS
The left screen is build using `react-native-tableview-simple`. The right one is native.

| `react-native-tableview-simple` | Native iOS |
| :------------: | :---------------: |
| ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshot.png) | ![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshotNative.png) |

```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellStyle="Basic" title="Basic" />
            <Cell cellStyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellStyle="LeftDetail" title="LeftDetail" detail="Detail" />
            <Cell
              cellStyle="Subtitle"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log('Heyho!')}
            />
          </Section>
          <Section header="DISABLED">
            <Cell cellStyle="Basic" isDisabled title="Basic" />
            <Cell
              cellStyle="RightDetail"
              isDisabled
              title="RightDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="LeftDetail"
              isDisabled
              title="LeftDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="Subtitle"
              isDisabled
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              isDisabled
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log('Heyho!')}
            />
          </Section>
          <Section header="ACCESSORY">
            <Cell
              cellStyle="Basic"
              accessory="DisclosureIndicator"
              title="Basic"
            />
            <Cell
              cellStyle="RightDetail"
              accessory="DetailDisclosure"
              title="RightDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="LeftDetail"
              accessory="Detail"
              title="LeftDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="Subtitle"
              accessory="Checkmark"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              accessory="Detail"
              title="Pressable w/ accessory"
              onPress={() => console.log('Heyho!')}
            />
          </Section>
          <Section header="Image" footer="A Footer">
            <Cell
              cellStyle="Basic"
              title="Basic"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="RightDetail"
              title="RightDetail"
              detail="Detail"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="LeftDetail"
              title="LeftDetail"
              detail="Detail"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="Subtitle"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="Basic"
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log('Heyho!')}
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
            <Cell
              cellStyle="Basic"
              title="Disable image resize"
              disableImageResize
              image={
                <Image
                  style={{ height: 50, width: 50, borderRadius: 5 }}
                  source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                  }}
                />
              }
            />
          </Section>
          <Section header="MISC">
            <Cell
              cellStyle="RightDetail"
              title="RightDetail"
              detail="Detail"
              rightDetailColor="#6cc644"
            />
            <Cell
              cellStyle="LeftDetail"
              title="LeftDetail"
              detail="Detail"
              leftDetailColor="#6cc644"
            />
            <Cell
              cellStyle="Basic"
              title="Switch"
              cellAccessoryView={<Switch />}
              contentContainerStyle={{ paddingVertical: 4 }}
            />
            <Cell
              cellStyle="Basic"
              title="ActivityIndicator"
              cellAccessoryView={<ActivityIndicator />}
            />
            <Cell
              cellContentView={<TextInput style={{fontSize: 16, flex: 1}} placeholder="TextInput"/>}
            />
          </Section>
          <Section header="CUSTOMCELLS">
            <Cell
              onPress={() => console.log('Heyho!')}
              contentContainerStyle={{ alignItems: 'flex-start', height: 60 }}
              cellContentView={
                <Text style={{ flex: 1, fontSize: 16 }}>
                  Custom height with Cell-Component
                </Text>
              }
            />
          </Section>
          <Section headerComponent={<CustomSectionHeader />}>
            <Cell cellStyle="Basic" title="Section uses prop headerComponent" />
          </Section>
        </TableView>
        <View
          style={{
            minHeight: Dimensions.get('window').height,
          }}
        >
          <View
            style={{
              backgroundColor: '#37474F',
              height: 500,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: '#ffc107',
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />
          </View>
          <TableView>
            <Section footer="All rights reserved.">
              <Cell
                title="Help / FAQ"
                titleTextColor="#007AFF"
                onPress={() => console.log('open Help/FAQ')}
              />
              <Cell
                title="Contact Us"
                titleTextColor="#007AFF"
                onPress={() => console.log('open Contact Us')}
              />
            </Section>
          </TableView>
        </View>
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
```

### Render with `FlatList`

```javascript
import React from 'react';
import { FlatList } from 'react-native';

import { Cell, Separator, TableView } from 'react-native-tableview-simple';

const data = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
];

export default (ExampleWithFlatList = () =>
  <FlatList
    data={data}
    keyExtractor={(item, index) => item.id}
    renderItem={({ item, separators }) =>
      <Cell
        title={item.title}
        onPress={console.log}
        onHighlightRow={separators.highlight}
        onUnHighlightRow={separators.unhighlight}
      />}
    ItemSeparatorComponent={({ highlighted }) =>
      <Separator isHidden={highlighted} />}
  />);
```


# Try it out

Try it in Expo: [https://snack.expo.io/@purii/react-native-tableview-simple](https://snack.expo.io/@purii/react-native-tableview-simple)

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

### Cell
| Prop  | Default | Type | Description |
| :------------ | :---------------:| :---------------:| ---------------|
| cellstyle | Basic | `string` | Predefined styles: `Basic`, `RightDetail`, `LeftDetail`, `Subtitle` |
| title | - | `string` | Title value |
| detail | - | `string` | Detail value |
| isDisabled | false | `bool` | Cell is disabled. `onPress` will not get triggered |
| accessory | - | `string` | Predefined accessory: `DisclosureIndicator` |
| onPress | - | `func` | If set, Cell will be automaticaly initialized with TouchableHighlight |


## Example
![](https://raw.github.com/Purii/react-native-tableview-simple/master/screenshot.png)
```javascript
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
	}
});

AppRegistry.registerComponent('example', () => Example);

```
# react-native-csstableview

**NOTE: This component is WIP!**

This component is a copy of the iOS-TableView with pure CSS.
It is not intended to be used for large datasets!
A use case might be something like a Settingsscreen.

## Installation
1. `npm i react-native-tableview-simple --save`
1. Add components `import {TableView, Section, Cell} from 'react-native-tableview-simple'`


## Extensible
This component provides you with some predefined CSS-styles, known from the native TableView.
You can always mix the `Cell`-Instances, inside a `Section`, with some Custom-Components.   
Therefore the `Cell`-Component itself can't be manipulated. If you aren't satisfied with a component, feel free to create a PR or just create and use a custom component. Get inspired by the predefined cellstyles.

### Submit a Cell-Component
Maybe you want to add your lovely designed Cell-Component to the project.
Just move your component to the folder `components`. Choose a meaningful name!

## Props
### Tableview

### Section
| Prop  | Description |
| :------------ | :---------------:|
| header | Header value |
| footer | Footer value |

### Cell
| Prop  | Description |
| :------------ | :---------------:|
| cellstyle | Predefined styles: Basic, RightDetail, LeftDetail, Subtitle |
| title | Title value |
| detail | Detail value |
| isDisabled | Boolean |
| accessory | Predefined accessory: DisclosureIndicator |
| onPress | Function for onPress. If set, Cell will be automaticaly initialized with TouchableHighlight |


```javascript
<TableView>
	<Section header="Header">
		<Cell cellstyle="Basic" title="Title"/>
		<Cell cellstyle="Basic" title="Title"/>
		<Cell cellstyle="RightDetail" title="Title" detail="Detail" />
		<Cell cellstyle="LeftDetail" title="Title" detail="Detail"/>
		<Cell cellstyle="Subtitle" title="Subtitle" detail="Nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo Linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
		<Cell cellstyle="Basic" title="Disabled" isDisabled="true"/>
		<Cell cellstyle="Basic" title="Pressable" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
	</Section>
</TableView>
```
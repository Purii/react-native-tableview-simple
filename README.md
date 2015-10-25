# react-native-csstableview

**NOTE: This component is WIP!**

This component is a copy of the iOS-TableView with pure CSS.
It is not intended to be used for large datasets!
As an example. I use this component, to create a settings-screen.

## Extensible
This component provides you with some predefined CSS-styles, known from the native TableView.
You can always mix the `Cell`-Instances, inside a `Section`, with some Custom-Components.   
Therefore the `Cell`-Component itself can't be manipulated. Just have a look into the source and copy the needed style.

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
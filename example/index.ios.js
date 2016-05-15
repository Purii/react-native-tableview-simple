import React, {
  Component,
} from 'react';
import {
  ActivityIndicatorIOS,
  AppRegistry,
  ScrollView,
  StyleSheet,
  SwitchIOS,
  Text,
  View,
} from 'react-native';
import {
  Cell,
  CustomCell,
  Section,
  TableView,
} from 'react-native-tableview-simple';
import Dimensions from 'Dimensions';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// Example component for section:headerComponent
const CustomSectionHeader = () => (
  <View>
    <Text>Custom header!</Text>
  </View>
);

// Demonstration (Better use functional component)
// eslint-disable-next-line
class Example extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellstyle="Basic" title="Basic" />
            <Cell cellstyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="LeftDetail" detail="Detail" />
            <Cell cellstyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
            <Cell cellstyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')} />
          </Section>
          <Section header="DISABLED">
            <Cell cellstyle="Basic" isDisabled title="Basic" />
            <Cell cellstyle="RightDetail" isDisabled title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" isDisabled title="LeftDetail" detail="Detail" />
            <Cell cellstyle="Subtitle" isDisabled title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
            <Cell cellstyle="Basic" isDisabled title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')} />
          </Section>
          <Section header="ACCESSORY">
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Basic" />
            <Cell cellstyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail" />
            <Cell cellstyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
            <Cell cellstyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log('Heyho!')} />
          </Section>
          <Section header="CUSTOMCELLS">
            <CustomCell>
              <Text style={{ flex: 1, fontSize: 16 }}>Loading</Text>
              <ActivityIndicatorIOS />
            </CustomCell>
            <CustomCell>
              <Text style={{ flex: 1, fontSize: 16 }}>Switch</Text>
              <SwitchIOS />
            </CustomCell>
          </Section>
          <Section headerComponent={<CustomSectionHeader />}>
            <Cell cellstyle="Basic" title="Section uses prop headerComponent" />
          </Section>
        </TableView>
        <View
          style={{
            height: Dimensions.get('window').height,
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
              <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')} />
              <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')} />
            </Section>
          </TableView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

AppRegistry.registerComponent('example', () => Example);

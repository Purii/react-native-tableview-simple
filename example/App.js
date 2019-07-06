/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Example component for section:headerComponent
const CustomSectionHeader = () => (
  <View>
    <Text>Custom header!</Text>
  </View>
);

const App = () => {
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
                  uri: 'https://reactjs.org/favicon.ico',
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
                  uri: 'https://reactjs.org/favicon.ico',
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
                  uri: 'https://reactjs.org/favicon.ico',
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
                  uri: 'https://reactjs.org/favicon.ico',
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
                  uri: 'https://reactjs.org/favicon.ico',
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
                  uri: 'https://reactjs.org/favicon.ico',
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
            title="Colored DisclosureIndicator"
            accessory="DetailDisclosure"
            accessoryColor="green"
            accessoryColorDisclosureIndicator="green"
            onPress={() => console.log('Heyho!')}
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
            cellContentView={
              <TextInput
                style={{ fontSize: 16, flex: 1 }}
                placeholder="TextInput"
              />
            }
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
        }}>
        <View
          style={{
            backgroundColor: '#37474F',
            height: 500,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default App;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Tab,
  TabHeader,
  TabPanel,
} from '../components/TabsCompoundComponentOptimized';
// import {Tab, TabHeader, TabPanel} from '../components/TabsCompoundComponent';

export function TabsScreen() {
  console.log('Rerender home screen');
  return (
    <View style={styles.container}>
      {/* TabSwitcher usage with Tab and TabPanel */}
      <TabHeader id="header">
        <Tab id="a">
          <Text>A</Text>
        </Tab>
        <Tab id="b">
          <Text>B</Text>
        </Tab>
      </TabHeader>
      <TabPanel whenActive="a">
        <Text>Content of A</Text>
      </TabPanel>
      <TabPanel whenActive="b">
        <Text>Content of B</Text>
      </TabPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

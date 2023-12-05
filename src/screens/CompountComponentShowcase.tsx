import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActiveTabComponent} from '../components/ActiveTabComponent';

export function CompoundComponentScreen() {
  return (
    <View style={styles.container}>
      <Text>Compound Component Demo</Text>
      <ActiveTabComponent />
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

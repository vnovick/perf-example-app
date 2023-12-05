import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActiveTabComponent} from '../components/ActiveTabComponent';
import {useIsFocused} from '@react-navigation/native';

export function CompoundComponentOptimizedScreen() {
  const isFocused = useIsFocused();
  return isFocused ? (
    <View style={styles.container}>
      <Text>Optimized component Demo</Text>
      <ActiveTabComponent />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import UncontrolledForm from '../components/UncontrolledForm';
import ControlledForm from '../components/ControlledForm';
import useRenderCounter from '../hooks/useRenderCounter';

export function ControlledUncontrolledScreen() {
  const [controlled, setControlled] = useState<boolean>(true);

  useRenderCounter('ControlledForm');

  const toggleControlled = () => {
    setControlled(prevState => !prevState);
  };
  return (
    <View style={styles.container}>
      <Text>{`${controlled ? 'Controlled' : 'Uncontrolled'} component`}</Text>
      {controlled ? <ControlledForm /> : <UncontrolledForm />}
      <Text>Toggle Controlled</Text>
      <Switch value={controlled} onValueChange={() => toggleControlled()} />
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

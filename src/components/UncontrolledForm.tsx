import React, {useCallback, useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import useRenderCounter from '../hooks/useRenderCounter';

const simulateLoad = () => {
  // Simulate a heavy computation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log('Sum calculated: ', sum);
};

const UncontrolledForm: React.FC = () => {
  const [text, setText] = useState('');

  const handleSubmit = useCallback(() => {
    console.log(text);
  }, [text]);
  useRenderCounter('UncontrolledForm re-render');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        defaultValue=""
        onChangeText={txt => {
          simulateLoad();
          setText(txt);
        }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
});

export default UncontrolledForm;

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
/* NON RTK */
// import {incrementCounter, decrementCounter} from './reduxSetupActions';
// import {RootState} from './reduxSetupStore';

/* RTK */
import {decrementCounter, incrementCounter} from './reduxSetupSlice';
import {RootState} from './reduxSetupStore';

const ReduxSetupScreen: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.reduxSetup.counter);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global State Demo</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
});

export default ReduxSetupScreen;

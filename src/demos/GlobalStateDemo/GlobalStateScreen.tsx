import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadBloatedState, loadOptimizedState} from './globalStateActions';
import {selectBloatedData, selectOptimizedData} from './globalStateSelectors';

const Item = ({...item}: any) => (
  <View
    style={{
      height: 200,
    }}>
    <Text style={styles.itemText}>{JSON.stringify(item)}</Text>
  </View>
);

const GlobalStateDemo: React.FC = () => {
  const dispatch = useDispatch();
  const bloatedData = useSelector(selectBloatedData); // Assuming it's an array of objects
  const optimizedData = useSelector(selectOptimizedData);
  const [showBloated, setShowBloated] = useState(true);

  useEffect(() => {
    dispatch(showBloated ? loadBloatedState() : loadOptimizedState());
  }, [dispatch, showBloated]);

  console.log(bloatedData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {showBloated ? 'Bloated State' : 'Optimized State'}
      </Text>
      {showBloated && bloatedData ? (
        <FlatList
          style={styles.flexOne}
          data={Object.values(bloatedData)}
          renderItem={Item}
        />
      ) : (
        <FlatList
          data={optimizedData} // Assuming optimizedData is an array of strings
          renderItem={({item}: any) => <Item {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Button
        title="Toggle State"
        onPress={() => setShowBloated(!showBloated)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
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
  itemText: {},
  // Additional styles...
});

export default GlobalStateDemo;

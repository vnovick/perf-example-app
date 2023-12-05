import {Button, Text, View} from 'react-native';
// import {useTabs} from './TabsCompoundComponent';
import {useTabs} from './TabsCompoundComponentOptimized';
import {memo} from 'react';

export const ActiveTabComponent: React.FC = memo(() => {
  const {activeTabID, setActiveTabID} = useTabs();
  return (
    <View>
      <Text>Active Tab is: {activeTabID}</Text>
      <Button title="Set tab to be A" onPress={() => setActiveTabID('a')} />
      <Button title="Set tab to be B" onPress={() => setActiveTabID('b')} />
    </View>
  );
});

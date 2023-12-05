import React from 'react';
import {View, Text} from 'react-native';

interface Tab {
  id: string;
  content: string;
}

interface TabsProps {
  activeTab: string;
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({activeTab, tabs}) => {
  return (
    <View>
      {tabs.map(tab => (
        <View key={tab.id}>
          {tab.id === activeTab ? <Text>{tab.content}</Text> : null}
        </View>
      ))}
    </View>
  );
};

export default Tabs;

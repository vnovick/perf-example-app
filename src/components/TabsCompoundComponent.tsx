import React, {useState, createContext, useContext, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from 'react-native';

interface DataContextType {
  activeTabID: string;
  setActiveTabID: (id: string) => void;
}

const DataContext = createContext<DataContextType>({
  activeTabID: '',
  setActiveTabID: () => {},
});

interface TabProps {
  id: string;
  children: ReactNode;
  style?: ViewStyle;
}

export const TabHeader: React.FC<TabProps> = ({children}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.tabsContainer}>
    {children}
  </ScrollView>
);

const Tab: React.FC<TabProps> = ({id, children, style = {}}) => {
  const {activeTabID, setActiveTabID} = useContext(DataContext)!;
  const isActive = activeTabID === id;
  console.log('Render Tab');
  return (
    <TouchableOpacity
      onPress={() => setActiveTabID(id)}
      style={[isActive ? styles.activeTab : styles.inactiveTab, style]}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};
interface TabPanelProps {
  whenActive: string;
  children: ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({whenActive, children}) => {
  console.log('Render TabPanel');
  const {activeTabID} = useContext(DataContext);
  return activeTabID === whenActive ? (
    <View style={styles.flexOne}>{children}</View>
  ) : null;
};

interface TabSwitcherProps {
  children: ReactNode;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({children}) => {
  const [activeTabID, setActiveTabID] = useState('a');
  return (
    <DataContext.Provider value={{activeTabID, setActiveTabID}}>
      {children}
    </DataContext.Provider>
  );
};
const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  // ... [other styles]
});

const useTabs = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabSwitcher');
  }
  return context;
};

export {TabSwitcher, Tab, TabPanel, useTabs};

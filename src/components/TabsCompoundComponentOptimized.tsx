import React, {ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {create} from 'zustand';

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
  const {activeTabID, setActiveTabID} = useTabStore();
  const isActive = activeTabID === id;
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
  const {activeTabID} = useTabStore();
  return activeTabID === whenActive ? (
    <View style={{flex: 1}}>{children}</View>
  ) : null;
};

const useTabStore = create<{
  activeTabID: string;
  setActiveTabID: (tabId: string) => void;
}>(set => ({
  activeTabID: 'a',
  setActiveTabID: (tabId: string) => set({activeTabID: tabId}),
}));

const styles = StyleSheet.create({
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

const useTabs = useTabStore;

export {Tab, TabPanel, useTabs};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './src/screens/Home';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GlobalStateScreen from './src/demos/GlobalStateDemo/GlobalStateScreen';
import ReduxSetupScreen from './src/demos/ReduxSetupDemo/ReduxSetupScreen';
import {CompoundComponentScreen} from './src/screens/CompountComponentShowcase';
import {TabSwitcher} from './src/components/TabsCompoundComponent';
import {CompoundComponentOptimizedScreen} from './src/screens/CompountComponentOptimized';
import {ControlledUncontrolledScreen} from './src/screens/ControlledUnctontrolled';
import {TabsScreen} from './src/screens/TabsScreen';
import ComplexStateScreen from './src/demos/ComplexState/ComplexStateScreen';
// Demo stores
import store from './src/demos/ComplexState/store';
// import globalStateStore from './src/demos/GlobalStateDemo/globalStateStore';
// import reduxSetupStore from './src/demos/ReduxSetupDemo/reduxSetupStore';
// import legacyStore from './src/state/legacyStore';

const Drawer = createDrawerNavigator();

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <TabSwitcher>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Tabs" component={TabsScreen} />
            <Drawer.Screen
              name="CompoundComponentScreen"
              component={CompoundComponentScreen}
            />
            <Drawer.Screen
              name="Controlled components"
              component={ControlledUncontrolledScreen}
            />
            <Drawer.Screen
              name="Optimized Tabs"
              component={CompoundComponentOptimizedScreen}
            />
            <Drawer.Screen
              name="GlobalStateDemo"
              component={GlobalStateScreen}
            />
            <Drawer.Screen name="ReduxSetupDemo" component={ReduxSetupScreen} />
            <Drawer.Screen
              name="ComplexStateScreen"
              component={ComplexStateScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </TabSwitcher>
    </Provider>
  );
}

export default App;

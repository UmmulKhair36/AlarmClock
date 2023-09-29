import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabBarComp from '../../config/Helpers/TabBarComp';
import DrawerComp from '../../config/Helpers/Drawer';

//Screens
import Home from './Home';
import timer from './timer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Bottom Tab Stacks
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'simple_push',
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="timer" component={timer} />
      {/* <Stack.Screen name="DateAndTimePicker" component={DateAndTimePicker} /> */}
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'simple_push',
        headerShown: false,
      }}
      // tabBar={props => <TabBarComp {...props} />}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="HomeStack1" component={HomeStack} />
      <Stack.Screen name="HomeStack2" component={HomeStack} />
      <Stack.Screen name="HomeStack3" component={HomeStack} />
      <Stack.Screen name="HomeStack4" component={HomeStack} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        animation: 'simple_push',
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {backgroundColor: 'transparent', width: '100%'},
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'TabStack'}>
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
};

export default AppStack;

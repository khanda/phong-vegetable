import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomerList from "../components/CustomerList";
import CustomerListScreen from "../screens/CustomerListScreen";
import DailyBillScreen from "../screens/DailyBillScreen";
import BillFormScreen from "../screens/BillFormcreen";

const CustomerStack = createStackNavigator({
    CustomerList: CustomerListScreen,
    DailyBill: DailyBillScreen,
    BillForm: BillFormScreen
  },
  {
    initialRouteName: 'CustomerList',
  });

CustomerStack.navigationOptions = {
  tabBarLabel: 'Khách hàng',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contacts${focused ? '' : '-outline'}`
          : 'users'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  CustomerStack,
  LinksStack,
  SettingsStack,
});

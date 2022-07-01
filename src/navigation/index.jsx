import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import MoreScreen from '../screens/MoreScreen';
import OrdersScreen from '../screens/OrdersScreen';
import HelpScreen from '../screens/HelpScreen';
import { StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Theme from '../theme';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  }
}

const HomeStack = createNativeStackNavigator()
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const InboxStack = createNativeStackNavigator()
const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <InboxStack.Screen name="Inbox" component={InboxScreen} />
    </InboxStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()
const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
    </OrdersStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Tab.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Theme.colors.primary,
          tabBarInactiveTintColor: Theme.colors.gray,
          tabBarLabelStyle: {
            textTransform: 'uppercase',
            fontFamily: Theme.typography.primaryBold
          },
          tabBarItemStyle: {
            paddingVertical: 12,
          },
          tabBarStyle: {
            height: 60,
            borderTopColor: Theme.colors.white,
          }
        }}>
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={18} color={color} />
              ),
            }
          }
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Inbox',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="message1" size={18} color={color} />
              )
            }
          } name="InboxTab"
          component={InboxStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Orders',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="shoppingcart" size={18} color={color} />
              )
            }
          }
          name="OrdersTab"
          component={OrdersStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="support-agent" size={18} color={color} />
              )
            }
          }
          name="Help" component={HelpScreen} />
        <Tab.Screen
          options={
            {
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="appstore-o" size={18} color={color} />
              )
            }
          }
          name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
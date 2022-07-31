import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HeadphoneScreen from '../screens/HeadphoneScreen';
import ProductDetails from '../screens/ProductDetails';
import EarphoneScreen from '../screens/EarphoneScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import Theme from '../theme';
import { MaterialCommunityIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

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

const HeadPhoneStack = createNativeStackNavigator()
const HeadPhoneStackScreen = () => {
  return (
    <HeadPhoneStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HeadPhoneStack.Screen name="HeadPhone" component={HeadphoneScreen} />
      <HeadPhoneStack.Screen name="Details" component={ProductDetails} />
    </HeadPhoneStack.Navigator>
  )
}

const EarPhoneStack = createNativeStackNavigator()
const EarPhoneStackScreen = () => {
  return (
    <EarPhoneStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <EarPhoneStack.Screen name="EarPhone" component={EarphoneScreen} />
      <EarPhoneStack.Screen name="Details" component={ProductDetails} />
    </EarPhoneStack.Navigator>
  )
}

const SpeakerStack = createNativeStackNavigator()
const SpeakerStackScreen = () => {
  return (
    <SpeakerStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SpeakerStack.Screen name="Speaker" component={SpeakerScreen} />
      <SpeakerStack.Screen name="Details" component={ProductDetails} />
    </SpeakerStack.Navigator>
  )
}

const CartStack = createNativeStackNavigator()
const CartStackScreen = () => {
  return (
    <CartStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  )
}

const TabIcon = ({ font, name, color }) => {
  switch (font) {
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={20} color={color} />
    case 'Ionicons':
      return <Ionicons name={name} size={20} color={color} />
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={20} color={color} />
    default:
      return <MaterialCommunityIcons name={name} size={20} color={color} />
  }
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
              tabBarIcon: ({ color }) => (
                <TabIcon font="MaterialCommunityIcons" name="home" color={color} />
              )
            }
          }
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Headphone',
              tabBarIcon: ({ color }) => (
                <TabIcon font="MaterialCommunityIcons" name="headphones" color={color} />
              )
            }
          }
          name="HeadphoneTab"
          component={HeadPhoneStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Earphone',
              tabBarIcon: ({ color }) => (
                <TabIcon font="SimpleLineIcons" name="earphones-alt" color={color} />
              )
            }
          }
          name="EarphoneTab"
          component={EarPhoneStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Speaker',
              tabBarIcon: ({ color }) => (
                <TabIcon font="MaterialCommunityIcons" name="speaker" color={color} />
              )
            }
          }
          name="SpeakerTab"
          component={SpeakerStackScreen}
        />
        <Tab.Screen
          options={
            {
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color }) => (
                <TabIcon font="Ionicons" name="cart-outline" color={color} />
              )
            }
          }
          name="CartTab"
          component={CartStackScreen}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import Oder from './src/screens/Oder';
import Store from './src/Store';
import Points from './src/screens/Points';
import Other from './src/screens/Other';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Oder" component={Oder} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Points" component={Points} />
      <Stack.Screen name="Other" component={Other} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-sharp';
            } else if (route.name === 'Oder') {
              iconName = focused ? 'ios-cafe-outline' : 'ios-cafe-sharp';
            } else if (route.name === 'Store') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline';
            } else if (route.name === 'Points') {
              iconName = focused ? 'md-wallet-outline' : 'md-wallet-sharp';
            } else if (route.name === 'Other') {
              iconName = focused ? 'reorder-three-sharp' : 'reorder-three-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Oder" component={Oder} />
        <Tab.Screen name="CStore" component={Store} />
        <Tab.Screen name="Points" component={Points} />
        <Tab.Screen name="Other" component={Other} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
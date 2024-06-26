
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './component/home';
import Setting from './component/setting';
import StatisticsCards from './component/statistics';
import StatisticsCard from './component/card';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'card') {
              iconName = focused ? 'credit-card' : 'credit-card';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'line-chart' : 'line-chart';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cogs' : 'cogs';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="card" component={StatisticsCard} />
        <Tab.Screen name="Statistics" component={StatisticsCards} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

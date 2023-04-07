import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottom/HomeScreen';
import Settings from '../bottom/Settings';
const Bottom = createBottomTabNavigator();
const Main = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}>
      <Bottom.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../images/home.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Bottom.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../images/settings.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
          tabBarBadge: 3,
        }}
        component={Settings}
      />
    </Bottom.Navigator>
  );
};

export default Main;

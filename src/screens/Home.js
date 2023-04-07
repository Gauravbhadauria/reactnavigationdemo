import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Home;

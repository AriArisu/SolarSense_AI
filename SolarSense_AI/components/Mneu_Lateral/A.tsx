import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '@/app/(tabs)/Index';
import Tomada from '@/app/(tabs)/Tomada';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Tomada" component={Tomada} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

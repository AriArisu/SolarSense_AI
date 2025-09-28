
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@/app/(tabs)/Index';
import TabTwoScreen from '@/app/(tabs)/Dashbord';
import DrawerContent from './drawercontent.index';

export type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={TabTwoScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
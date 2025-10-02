
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '@/app/Index';
import Dashbord from '@/app/Dashbord';
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
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={Dashbord} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
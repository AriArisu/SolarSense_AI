// routes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/app/(tabs)/Index';
import TabTwoScreen from '@/app/Dashbord';
import Dashbord from '@/app/Dashbord';


export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: { itemId: number; otherParam?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Dashbord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

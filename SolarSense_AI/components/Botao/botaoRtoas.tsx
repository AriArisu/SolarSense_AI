import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/app/(tabs)/Index';
import Dashbord from '@/app/Dashbord';
import Tomada from '@/app/(tabs)/Tomada';

// Tipagem de rotas
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: { itemId: number; otherParam?: string };
  Tomada: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Dashbord} />
        <Stack.Screen name="Tomada" component={Tomada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

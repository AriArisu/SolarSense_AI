import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '@/app/(tabs)/Index';
import Tomada from '@/app/(tabs)/Tomada';
import Dashbord from '@/app/(tabs)/Dashbord';
import UseTerms from '@/app/(tabs)/Termos_de_uso'


// Importe os outros componentes conforme necessário

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    /* imagem de header */
    <NavigationContainer>
      <div>
      <t>Notificações</t>

      </div>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Dashboards" component={Dashbord} />
        <Drawer.Screen name="Tomadas Inteligentes" component={Tomada} />
        <Drawer.Screen name="SEMS" component={/* Adicione o componente SEMS */} />
        <Drawer.Screen name="Configurações" component={/* Adicione o componente Configurações */} />
        <Drawer.Screen name="Termos de Uso" component={UseTerms/} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
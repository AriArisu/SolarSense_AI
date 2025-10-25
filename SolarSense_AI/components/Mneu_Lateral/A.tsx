import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

const logoImage = require('../../assets/66ccb8a8-0a1a-4674-b231-d666caebc0db.png');

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const currentRoute = props.state.routes[props.state.index].name;

  return (
    <DrawerContentScrollView 
      {...props} 
      className="flex-1 bg-[#2C2C2E]"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* Header com logo */}
      <View className="px-6 pt-16 pb-6 flex-row items-center gap-3">
        <Image 
          source={logoImage} 
          className="w-12 h-12"
          resizeMode="contain"
        />
        <Text className="text-white text-xl font-bold">SolarSense AI</Text>
      </View>

      {/* Notificações com Toggle */}
      <View className="mx-4 mb-2 px-4 py-3 flex-row items-center justify-between rounded-xl bg-[#3A3A3C]">
        <View className="flex-row items-center gap-3">
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol size={20} name="house.fill" color="#FF6B5A" />
          </View>
          <Text className="text-[#8E8E93] text-base font-medium">Notificações</Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#767577', true: '#FF6B5A' }}
          thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Menu Items */}
      <View className="mt-2 px-2">
        {/* Dashboards - Active */}
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('Dashbord')}
          className={`flex-row items-center gap-4 px-6 py-4 mb-2 rounded-full ${
            currentRoute === 'Dashbord' ? 'bg-gradient-to-r from-[#FF6B5A] to-[#E60013]' : ''
          }`}
          style={currentRoute === 'Dashbord' ? {
            backgroundColor: '#FF6B5A',
            shadowColor: '#FF6B5A',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
          } : {}}
        >
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol 
              size={20} 
              name="paperplane.fill" 
              color={currentRoute === 'Dashbord' ? '#FFFFFF' : '#FF6B5A'} 
            />
          </View>
          <Text className={`text-base font-semibold ${
            currentRoute === 'Dashbord' ? 'text-white' : 'text-[#8E8E93]'
          }`}>
            Dashboards
          </Text>
        </TouchableOpacity>

        {/* Tomadas Inteligentes */}
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('Tomada')}
          className="flex-row items-center gap-4 px-6 py-4 mb-2 rounded-full"
        >
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol size={20} name="paperplane.fill" color="#FF6B5A" />
          </View>
          <Text className="text-[#8E8E93] text-base font-semibold">
            Tomadas Inteligentes
          </Text>
        </TouchableOpacity>

        {/* SEMS */}
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('SEMS')}
          className="flex-row items-center gap-4 px-6 py-4 mb-2 rounded-full"
        >
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol size={20} name="paperplane.fill" color="#FF6B5A" />
          </View>
          <Text className="text-[#8E8E93] text-base font-semibold">
            SEMS
          </Text>
        </TouchableOpacity>

        {/* Configurações */}
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('config')}
          className="flex-row items-center gap-4 px-6 py-4 mb-2 rounded-full"
        >
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol size={20} name="chevron.left.forwardslash.chevron.right" color="#FF6B5A" />
          </View>
          <Text className="text-[#8E8E93] text-base font-semibold">
            Configurações
          </Text>
        </TouchableOpacity>

        {/* Termos de Uso */}
        <TouchableOpacity 
          onPress={() => props.navigation.navigate('Termos_de_uso')}
          className="flex-row items-center gap-4 px-6 py-4 mb-2 rounded-full"
        >
          <View className="w-6 h-6 items-center justify-center">
            <IconSymbol size={20} name="paperplane.fill" color="#FF6B5A" />
          </View>
          <Text className="text-[#8E8E93] text-base font-semibold">
            Termos de Uso
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

function HeaderMenuIcon({ navigation }: any) {
  return (
    <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}
      className="px-4 py-2"
    >
      <IconSymbol size={28} name="chevron.right" color="#FF6B5A" />
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: '#2C2C2E',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3C',
          },
          headerTintColor: '#FF6B5A',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          headerLeft: () => <HeaderMenuIcon navigation={navigation} />,
          drawerStyle: {
            backgroundColor: '#2C2C2E',
            width: 280,
            borderRightWidth: 2,
            borderRightColor: '#1E90FF',
          },
          swipeEdgeWidth: 100,
          drawerType: 'front',
        })}
      >
        <Drawer.Screen 
          name="Index" 
          options={{ 
            title: 'Home',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="Dashbord" 
          options={{ 
            title: 'Dashboards',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="Tomada" 
          options={{ 
            title: 'Tomadas Inteligentes',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="SEMS" 
          options={{ 
            title: 'SEMS',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="config" 
          options={{ 
            title: 'Configurações',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="Termos_de_uso" 
          options={{ 
            title: 'Termos de Uso',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="Agendamento" 
          options={{ 
            title: 'Agendamento',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
        <Drawer.Screen 
          name="Timer" 
          options={{ 
            title: 'Timer',
            headerStyle: { backgroundColor: '#2C2C2E' },
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
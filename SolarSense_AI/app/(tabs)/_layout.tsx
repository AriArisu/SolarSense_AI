import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { usePathname } from 'expo-router';

const logoImage = require('../../assets/66ccb8a8-0a1a-4674-b231-d666caebc0db.png');

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  const tintColor = '#E60013';
  const backgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#FFFFFF';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const inactiveColor = colorScheme === 'dark' ? '#8E8E93' : '#6B696A';

  // Mapear rotas para nomes corretos
  const getRouteName = (path: string) => {
    if (path === '/(tabs)' || path === '/(tabs)/Index') return 'Index';
    return path.replace('/(tabs)/', '');
  };

  const currentRoute = getRouteName(pathname);

  const menuItems = [
    {
      name: 'Index',
      label: 'Home',
      icon: 'house.fill',
      route: '/(tabs)/Index',
    },
    {
      name: 'Dashbord',
      label: 'Dashboards',
      icon: 'chart.bar.fill',
      route: '/(tabs)/Dashbord',
    },
    {
      name: 'Tomada',
      label: 'Tomadas Inteligentes',
      icon: 'bolt.fill',
      route: '/(tabs)/Tomada',
    },
    {
      name: 'SEMS',
      label: 'SEMS',
      icon: 'cpu',
      route: '/(tabs)/SEMS',
    },
    {
      name: 'config',
      label: 'Configurações',
      icon: 'gear',
      route: '/(tabs)/config',
    },
    {
      name: 'Termos_de_uso',
      label: 'Termos de Uso',
      icon: 'doc.text',
      route: '/(tabs)/Termos_de_uso',
    },
  ];

  return (
    <DrawerContentScrollView 
      {...props} 
      style={[styles.drawerScrollView, { backgroundColor }]}
      contentContainerStyle={styles.drawerContent}
    >
      {/* Header com logo e botão fechar */}
      <View style={[styles.drawerHeader, { backgroundColor }]}>
        <View style={styles.headerTop}>
          <Image 
            source={logoImage} 
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <TouchableOpacity 
            onPress={() => props.navigation.closeDrawer()}
            style={styles.closeButton}
          >
            <IconSymbol size={24} name="chevron.right" color={textColor} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.drawerHeaderTitle, { color: textColor }]}>
          SolarSense AI
        </Text>
      </View>

      {/* Notificações Toggle */}
      <View style={[styles.notificationContainer, { 
        backgroundColor: colorScheme === 'dark' ? '#2C2C2E' : '#F2F2F7' 
      }]}>
        <View style={styles.notificationContent}>
          <IconSymbol size={24} name="bell" color={textColor} />
          <Text style={[styles.notificationText, { color: textColor }]}>
            Notificações
          </Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#767577', true: '#FE7457' }}
          thumbColor={notificationsEnabled ? '#E60013' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Menu Items */}
      <View style={styles.drawerSection}>
        {menuItems.map((item) => {
          const isActive = currentRoute === item.name;
          
          return (
            <DrawerItem
              key={item.name}
              label={item.label}
              onPress={() => {
                console.log(`Navegando para: ${item.name}`);
                props.navigation.navigate(item.name as never);
              }}
              icon={({ size }) => (
                <View style={[
                  styles.iconContainer,
                  isActive && styles.iconContainerActive
                ]}>
                  <IconSymbol 
                    size={size} 
                    name={item.icon as any} 
                    color={isActive ? '#FFFFFF' : inactiveColor} 
                  />
                </View>
              )}
              labelStyle={[
                styles.drawerItemLabel, 
                { color: isActive ? tintColor : inactiveColor },
                isActive && styles.drawerItemLabelActive
              ]}
              style={[
                styles.drawerItem,
                isActive && { backgroundColor: 'transparent' }
              ]}
              focused={isActive}
            />
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

function HeaderMenuIcon({ navigation }: any) {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}
      style={styles.menuButton}
      activeOpacity={0.7}
    >
      <View style={styles.hamburgerIcon}>
        <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
        <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
        <View style={[styles.hamburgerLine, { backgroundColor: iconColor }]} />
      </View>
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#000000' : '#FFFFFF';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: backgroundColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: colorScheme === 'dark' ? '#2C2C2E' : '#E5E5EA',
          },
          headerTintColor: textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerLeft: () => <HeaderMenuIcon navigation={navigation} />,
          drawerStyle: {
            width: 320,
            backgroundColor: backgroundColor,
          },
          swipeEdgeWidth: 50,
          drawerType: 'slide',
        })}
      >
        <Drawer.Screen 
          name="Index" 
          options={{ 
            title: 'Home',
            drawerLabel: 'Home',
          }} 
        />
        <Drawer.Screen 
          name="Dashbord" 
          options={{ 
            title: 'Dashboard',
            drawerLabel: 'Dashboards',
          }} 
        />
        <Drawer.Screen 
          name="Tomada" 
          options={{ 
            title: 'Tomadas',
            drawerLabel: 'Tomadas Inteligentes',
          }} 
        />
        <Drawer.Screen 
          name="SEMS" 
          options={{ 
            title: 'SEMS',
            drawerLabel: 'SEMS',
          }} 
        />
        <Drawer.Screen 
          name="config" 
          options={{ 
            title: 'Configurações',
            drawerLabel: 'Configurações',
          }} 
        />
        <Drawer.Screen 
          name="Termos_de_uso" 
          options={{ 
            title: 'Termos de Uso',
            drawerLabel: 'Termos de Uso',
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  hamburgerIcon: {
    width: 24,
    height: 20,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: 24,
    height: 3,
    borderRadius: 2,
  },
  drawerScrollView: {
    flex: 1,
  },
  drawerContent: {
    flexGrow: 1,
  },
  drawerHeader: {
    padding: 20,
    paddingTop: 60,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLogo: {
    width: 48,
    height: 48,
  },
  closeButton: {
    padding: 4,
  },
  drawerHeaderTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 12,
    borderRadius: 12,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  drawerSection: {
    marginTop: 8,
    marginBottom: 16,
  },
  drawerItem: {
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerActive: {
    backgroundColor: '#E60013',
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: -8,
  },
  drawerItemLabelActive: {
    fontWeight: '700',
  },
  divider: {
    height: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bottomSection: {
    marginTop: 8,
  },
});
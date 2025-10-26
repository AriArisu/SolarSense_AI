import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

// Definir os itens do menu com seus ícones
const menuItems = [
  {
    name: 'Index',
    label: 'Home',
    icon: 'house.fill',
    title: 'Home',
  },
  {
    name: 'Dashbord',
    label: 'Dashboard',
    icon: 'chart.bar.fill',
    title: 'Dashboard',
  },
  {
    name: 'Tomada',
    label: 'Tomadas',
    icon: 'bolt.fill',
    title: 'Tomadas',
  },
  {
    name: 'SEMS',
    label: 'SEMS',
    icon: 'cpu',
    title: 'SEMS',
  },
  {
    name: 'config',
    label: 'Configurações',
    icon: 'gear',
    title: 'Configurações',
  },
  {
    name: 'Termos_de_uso',
    label: 'Termos de Uso',
    icon: 'doc.text',
    title: 'Termos de Uso',
  },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  const renderMenuItem = (item: typeof menuItems[0]) => (
    <DrawerItem
      key={item.name}
      label={item.label}
      onPress={() => {
        console.log(`Navegando para: ${item.name}`);
        props.navigation.navigate(item.name as never);
      }}
      icon={({ size, focused }) => (
        <IconSymbol 
          size={size} 
          name={item.icon as any} 
          color={focused ? tintColor : textColor} 
        />
      )}
      activeTintColor={tintColor}
      inactiveTintColor={textColor}
      activeBackgroundColor={colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)'}
      style={styles.drawerItem}
      labelStyle={[styles.drawerItemLabel, { color: textColor }]}
    />
  );

  return (
    <DrawerContentScrollView 
      {...props} 
      style={[styles.drawerScrollView, { backgroundColor }]}
      contentContainerStyle={styles.drawerContent}
    >
      {/* Header */}
      <View style={[styles.drawerHeader, { backgroundColor: tintColor }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            onPress={() => props.navigation.closeDrawer()}
            style={styles.closeButton}
          >
            <IconSymbol size={24} name="chevron.right" color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.drawerHeaderTitle}>⚡ SolarSense AI</Text>
        <Text style={styles.drawerHeaderSubtitle}>Gerenciamento Inteligente</Text>
      </View>

      {/* Menu Principal */}
      <View style={styles.drawerSection}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>MENU PRINCIPAL</Text>
        {menuItems.map(renderMenuItem)}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: textColor }]}>
          SolarSense AI v1.0.0
        </Text>
        <Text style={[styles.footerSubtext, { color: textColor }]}>
          © 2025 Todos os direitos reservados
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

function HeaderMenuIcon({ navigation }: any) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}
      style={styles.menuButton}
      activeOpacity={0.7}
    >
      <IconSymbol size={28} name="chevron.right" color={tintColor} />
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const backgroundColor = Colors[colorScheme ?? 'light'].background;

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
            borderBottomColor: '#e0e0e0',
          },
          headerTintColor: tintColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerLeft: () => <HeaderMenuIcon navigation={navigation} />,
          drawerStyle: {
            width: 300,
            backgroundColor: backgroundColor,
          },
          swipeEdgeWidth: 50,
          drawerType: 'front',
        })}
      >

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
  drawerScrollView: {
    flex: 1,
  },
  drawerContent: {
    flexGrow: 1,
  },
  drawerHeader: {
    padding: 24,
    paddingTop: 60,
    marginBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  closeButton: {
    padding: 4,
  },
  drawerHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  drawerHeaderSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  drawerSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 8,
    opacity: 0.6,
    letterSpacing: 1,
  },
  drawerItem: {
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  drawerItemLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: -8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    marginHorizontal: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.7,
  },
  footerSubtext: {
    fontSize: 10,
    opacity: 0.5,
    marginTop: 4,
  },
});
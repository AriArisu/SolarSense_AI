import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function CustomDrawerContent(props: any) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <DrawerContentScrollView 
      {...props} 
      style={[styles.drawerScrollView, { backgroundColor }]}
      contentContainerStyle={styles.drawerContent}
    >
      {/* Header com botão fechar */}
      <View style={[styles.drawerHeader, { backgroundColor: tintColor }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            onPress={() => props.navigation.closeDrawer()}
            style={styles.closeButton}
          >
            <IconSymbol size={24} name="line.3.horizontal" color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.drawerHeaderTitle}>Meu App</Text>
        <Text style={styles.drawerHeaderSubtitle}>Bem-vindo!</Text>
      </View>

      {/* Restante do conteúdo do drawer... */}
      <View style={styles.drawerSection}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Index')}
          icon={({ size }) => (
            <IconSymbol size={size} name="house.fill" color={tintColor} />
          )}
          activeTintColor={tintColor}
          inactiveTintColor={textColor}
          activeBackgroundColor={colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)'}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Explore"
          onPress={() => props.navigation.navigate('Dashbord')}
          icon={({ size }) => (
            <IconSymbol size={size} name="paperplane.fill" color={tintColor} />
          )}
          activeTintColor={tintColor}
          inactiveTintColor={textColor}
          activeBackgroundColor={colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)'}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
        />
      </View>
    </DrawerContentScrollView>
  );
}

// Componente para o ícone de menu no header
function HeaderMenuIcon({ navigation }: any) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <TouchableOpacity 
      onPress={() => navigation.toggleDrawer()}
      style={styles.menuButton}
    >
      <IconSymbol size={28} name="line.3.horizontal" color={tintColor} />
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
          },
          headerTintColor: tintColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <HeaderMenuIcon navigation={navigation} />,
          drawerStyle: {
            width: 320,
          },
          swipeEdgeWidth: 100,
        })}
      >
        <Drawer.Screen 
          name="Dashbord" 
          options={{ 
            title: 'Explore',
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
  drawerScrollView: {
    flex: 1,
  },
  drawerContent: {
    flexGrow: 1,
  },
  drawerHeader: {
    padding: 24,
    paddingTop: 60,
    marginBottom: 20,
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
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  drawerSection: {
    marginBottom: 24,
  },
  drawerItem: {
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: -8,
    color:'white'
  },
});
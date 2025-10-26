import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useNavigation } from '@react-navigation/native';

interface ConfigItemProps {
  icon: string;
  title: string;
  onPress?: () => void;
  isLogout?: boolean;
}

const ConfigItem: React.FC<ConfigItemProps> = ({ icon, title, onPress, isLogout = false }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.configItem,
        {
          backgroundColor: isDark ? '#2C2C2E' : '#3A3A3C',
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.configItemLeft}>
        <IconSymbol
          name={icon as any}
          size={22}
          color={isLogout ? '#E60013' : (isDark ? '#FFFFFF' : '#E5E5EA')}
        />
        <Text style={[
          styles.configItemText,
          { color: isLogout ? '#E60013' : (isDark ? '#FFFFFF' : '#E5E5EA') }
        ]}>
          {title}
        </Text>
      </View>
      
      {!isLogout && (
        <IconSymbol
          name="chevron.right"
          size={20}
          color={isDark ? '#8E8E93' : '#6B696A'}
        />
      )}
    </TouchableOpacity>
  );
};

export default function Config() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const navigation = useNavigation();

  const handleTheme = () => {
    console.log('Abrir configurações de tema');
    // Implementar navegação para tela de tema
  };

  const handleSecurity = () => {
    console.log('Abrir Senha & Segurança');
    // Implementar navegação para tela de segurança
  };

  const handleAccount = () => {
    console.log('Abrir Conta');
    // Implementar navegação para tela de conta
  };

  const handleWifi = () => {
    console.log('Abrir Wi-Fi');
    // Implementar navegação para tela de Wi-Fi
  };

  const handleAlexa = () => {
    console.log('Abrir Alexa');
    // Implementar navegação para tela de Alexa
  };

  const handleBluetooth = () => {
    console.log('Abrir Bluetooth');
    // Implementar navegação para tela de Bluetooth
  };

  const handleLogout = () => {
    console.log('Fazer logout');
    // Implementar lógica de logout
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#1C1C1E' : '#2C2C2E' }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <IconSymbol
            name="chevron.right"
            size={24}
            color={isDark ? '#FFFFFF' : '#E5E5EA'}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDark ? '#FFFFFF' : '#E5E5EA' }]}>
          Configurações
        </Text>
      </View>

      {/* Configurações Principais */}
      <View style={styles.section}>
        <ConfigItem
          icon="house.fill"
          title="Tema"
          onPress={handleTheme}
        />
        
        <ConfigItem
          icon="gear"
          title="Senha & Segurança"
          onPress={handleSecurity}
        />
        
        <ConfigItem
          icon="person"
          title="Conta"
          onPress={handleAccount}
        />
      </View>

      {/* Conectividade */}
      <View style={styles.section}>
        <ConfigItem
          icon="wifi"
          title="Wi-Fi"
          onPress={handleWifi}
        />
        
        <ConfigItem
          icon="speaker.wave.2"
          title="Alexa"
          onPress={handleAlexa}
        />
        
        <ConfigItem
          icon="antenna.radiowaves.left.and.right"
          title="Bluetooth"
          onPress={handleBluetooth}
        />
      </View>

      {/* Logout */}
      <View style={styles.logoutSection}>
        <ConfigItem
          icon="arrow.right.square"
          title="Log out"
          onPress={handleLogout}
          isLogout={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
    transform: [{ rotate: '180deg' }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
    gap: 1,
  },
  configItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  configItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  configItemText: {
    fontSize: 16,
    fontWeight: '400',
  },
  logoutSection: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
}); 
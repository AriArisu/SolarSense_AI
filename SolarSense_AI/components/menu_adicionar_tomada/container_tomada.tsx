import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface ContainerTomadaProps {
  titulo: string;
  placeholder?: string;
  icone?: string;
  onPress?: () => void;
  valor?: string;
}

export default function ContainerTomada({ 
  titulo, 
  placeholder, 
  icone, 
  onPress,
  valor 
}: ContainerTomadaProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: isDark ? '#FFFFFF' : '#000000' }]}>
        {titulo}
      </Text>
      
      <TouchableOpacity 
        style={[
          styles.inputContainer,
          { 
            backgroundColor: isDark ? '#2C2C2E' : '#F2F2F7',
            borderColor: isDark ? '#3A3A3C' : '#E5E5EA'
          }
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.inputText,
          { color: valor ? (isDark ? '#FFFFFF' : '#000000') : '#8E8E93' }
        ]}>
          {valor || placeholder || 'Selecionar...'}
        </Text>
        
        {icone && (
          <IconSymbol 
            name={icone as any} 
            size={20} 
            color={isDark ? '#8E8E93' : '#6B696A'} 
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  inputText: {
    fontSize: 16,
    flex: 1,
  },
});
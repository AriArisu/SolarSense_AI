import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/components/Botao/botaoRtoas';
import { useColorScheme } from '@/hooks/use-color-scheme';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface BotaoProps {
  style?: ViewStyle;
  title?: string;
  onPress?: () => void;
  navigateTo?: keyof RootStackParamList;
  params?: any;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Botao: React.FC<BotaoProps> = ({ 
  style, 
  title = "Botão", 
  onPress, 
  navigateTo, 
  params,
  variant = 'outline'
}) => {
  const navigation = useNavigation<NavigationProp>();
  const colorScheme = useColorScheme();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo, params);
    } else if (onPress) {
      onPress();
    }
  };

  const getButtonStyle = () => {
    const isDark = colorScheme === 'dark';
    const baseStyle = [styles.button, style];

    switch (variant) {
      case 'primary':
        return [
          ...baseStyle,
          styles.primaryButton,
          { backgroundColor: '#E60013' }
        ];
      case 'secondary':
        return [
          ...baseStyle,
          styles.secondaryButton,
          { backgroundColor: '#FE7457' }
        ];
      case 'outline':
      default:
        return [
          ...baseStyle,
          styles.outlineButton,
          { 
            borderColor: '#E60013',
            backgroundColor: isDark ? '#2C2C2E' : '#FFFFFF'
          }
        ];
    }
  };

  const getTextStyle = () => {
    const isDark = colorScheme === 'dark';
    const baseStyle = [styles.buttonText];

    switch (variant) {
      case 'primary':
      case 'secondary':
        return [...baseStyle, { color: '#FFFFFF' }];
      case 'outline':
      default:
        return [
          ...baseStyle, 
          { color: isDark ? '#FFFFFF' : '#000000' }
        ];
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={getButtonStyle()}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Botao;

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.85,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  outlineButton: {
    borderWidth: 2,
  },
  primaryButton: {
    borderWidth: 0,
  },
  secondaryButton: {
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
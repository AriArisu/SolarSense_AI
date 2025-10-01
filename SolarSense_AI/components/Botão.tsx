import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface BotãoProps {
  style?: ViewStyle;
  title?: string;
  onPress?: () => void;
  navigateTo?: {
    screen: keyof RootStackParamList;
    params?: any;
  };
}

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; otherParam?: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Botão: React.FC<BotãoProps> = ({ 
  style, 
  title = "Botão", 
  onPress, 
  navigateTo 
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo.screen, navigateTo.params);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <LinearGradient
        colors={['#FE7457', '#E60013']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Botão;

const styles = StyleSheet.create({
  linearGradient: {
    width: 190 * 1.5,     // 90% da largura da tela
    height: 130 * 0.9,
    borderRadius: 17,        // Outer border radius
    alignSelf: 'center',     // centraliza horizontalmente
  },
  innerContainer: {
    borderRadius: 10,        // Inner border radius
    flex: 1,
    margin: 5,               // Espessura da borda
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Alexandria',
    textAlign: 'center',
    color: '#6b696aff',
  },
});
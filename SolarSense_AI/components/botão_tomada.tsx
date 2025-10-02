import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // ou qualquer outro pacote de ícones

const { width } = Dimensions.get('window');
const BUTTON_SIZE = width * 0.3; // 30% da largura da tela

const PowerButton: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={['#7FEFE6', '#43D3D1']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.button}
      >
        <Ionicons name="power" size={BUTTON_SIZE * 0.5} color="#fff" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2, // círculo perfeito
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10, // Android shadow
  },
});

export default PowerButton;

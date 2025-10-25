import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ChatBotaoProps {
  onPress?: () => void;
  title?: string;
}

const ChatBotao: React.FC<ChatBotaoProps> = ({ onPress, title = 'Enviar' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: '#E60013',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Alexandria',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChatBotao;
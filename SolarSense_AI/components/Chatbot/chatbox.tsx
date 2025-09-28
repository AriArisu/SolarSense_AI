import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ChatBotScreen: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendToN8N = async () => {
    try {
      const res = await axios.post('https://ariarisu22.app.n8n.cloud/workflow/new?projectId=U9PdRgZYHic77W07&uiContext=workflow_list', {
        message: input,
      });
 
      setResponse(res.data.reply);
    } catch (error) {
      console.error(error);
      setResponse('Erro ao comunicar com o bot');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        value={input}
        onChangeText={setInput}
      />
     <TouchableOpacity 
    style={styles.button} 
    onPress={sendToN8N}
>
    <Text style={styles.buttonText}>Enviar</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    flexDirection: "row", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    backgroundColor: "#FDFDFE", 
    width: 700,
    textAlign: 'center', 
  },
  reply: { 
    marginTop: 20, 
    fontSize: 16, 
    color: "#ffffffff" 
  },
  button: { 
    backgroundColor: "#E60013", 
    borderRadius: 10, 
    width: 75, 
    height: 40,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  buttonText: { 
    color: '#ffffff', // Adicionei cor para o texto ser visível
    fontFamily: 'Alexandria',
    textAlign: 'center', // Garante centralização do texto
  }
});

export default ChatBotScreen;

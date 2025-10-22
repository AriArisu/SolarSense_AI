import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatBotScreen: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

const sendToN8N = async () => {
  try {
    const res = await fetch('https://pf1980.app.n8n.cloud/webhook/aiaiai_aiamyorbuterflai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const text = await res.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = { reply: text };
    }

    setResponse(data.reply || 'Sem resposta do bot');
  } catch (error) {
    console.error('Erro ao comunicar com o bot:', error);
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
      <TouchableOpacity style={styles.button} onPress={sendToN8N}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {response !== '' && <Text style={styles.reply}>{response}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FDFDFE',
    width: 300,
    textAlign: 'center',
    borderRadius: 20,
  },
  reply: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#E60013',
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Alexandria',
    textAlign: 'center',
  },
});

export default ChatBotScreen;

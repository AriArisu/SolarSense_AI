import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
      <Button title="Enviar" onPress={sendToN8N} />
      <Text style={styles.reply}>Resposta do bot: {response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  reply: { marginTop: 20, fontSize: 16 },
});

export default ChatBotScreen;

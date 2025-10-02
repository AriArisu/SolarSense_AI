import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ChatBotScreen from '@/components/Chatbot/chatbox';
import Menu from '@/components/Menu_Lateral/screen-home';


const Home = () => {
  return (
    <View style={styles.container}>
      <Image/>

      <View style={styles.stepContainer}>
        <Text style={styles.text}>Olá, seja bem-vindo</Text>
        <Text style={styles.text}>Como posso ajudar?</Text>

        <ChatBotScreen />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   // centraliza horizontalmente
    justifyContent: 'center', // centraliza verticalmente
    backgroundColor: '#fff',
    padding: 16,
  },
  stepContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 45,
    marginBottom: 8,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
});

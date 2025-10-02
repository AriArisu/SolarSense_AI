import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import ChatBotScreen from '@/components/Chatbot/chatbox';
import Menu from '@/components/Menu_Lateral/screen-home';



const Home = () => {
  return (

    <View style={styles.container}>

      <View style={styles.stepContainer}>

        <Text style={styles.text}>
          Olá Seja Bem-Vindo
        </Text>

        <Text style={styles.text}>
          Como posso Ajudar
        </Text>

        <ChatBotScreen />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    marginBottom: 8,
    padding: 16,
  },
  text: {
    color: "#000000ff",
    fontFamily: "Alexandria",
    fontSize: 16,
    marginBottom: 8, 
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center', 
    marginBottom: 16, 
  }
});

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ChatBotScreen from '@/components/Chatbot/chatbox';
import { useNavigation } from 'expo-router';


const logoImage = require('../../assets/66ccb8a8-0a1a-4674-b231-d666caebc0db.png');

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={logoImage} 
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.stepContainer}>
          <Text style={styles.text}>Olá, seja bem-vindo</Text>
          <Text style={styles.text}>Como posso ajudar?</Text>

          <ChatBotScreen />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  stepContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 28,
    marginBottom: 8,
    textAlign: 'center',
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 2,
  },
});

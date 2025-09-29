import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView,Text } from 'react-native';
import { Link } from 'expo-router';
import ChatBotScreen from '@/components/Chatbot/chatbox';
import DrawerContent from '@/components/Menu_Lateral/drawercontent.index';

export default function HomeScreen() {
  return (




    <View
    style={styles.stepContainer}>

    <Image 
 style={styles.image}
    >

    </Image>


    <Text
    style={styles.Text}
    >
    Olá Seja Bem-Vindo
     </Text>

      <Text style={styles.Text}>
    Como posso Ajudar
     </Text>


  <ChatBotScreen />

  </View>
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    flexDirection: 'column',
    gap: 8,
    marginBottom: 8,
  },
  Text:{
    alignItems: "flex-start",
    color: "#FFFFFFFF",
    fontFamily: "Alexandria"
  },
  image:{

  }
});

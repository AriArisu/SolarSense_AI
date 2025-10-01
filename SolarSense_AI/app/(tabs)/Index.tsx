import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import ChatBotScreen from '@/components/Chatbot/chatbox';
import Header from '@/components/Header/header';
import { RootDrawerParamList } from '@/components/Menu_Lateral/index.routes';

type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Header 
        title="Home" 
        onPress={() => navigation.openDrawer()} 
      />

      <View style={styles.stepContainer}>
        <Image 
          style={styles.image}
        />

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

import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';;
import { Link } from 'expo-router';
import ChatBotScreen from '@/components/Chatbot/chatbox';

export default function HomeScreen() {
  return (
      <ChatBotScreen>
</ChatBotScreen>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

import { Image } from 'expo-image';
import { Platform, StyleSheet,View } from 'react-native';
//Import de componentes
import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Botão from '@/components/Botão';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (

    <View>

    <ThemedText>
      Ola      
    </ThemedText>

    <Botão></Botão>

</View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#1a0808ff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

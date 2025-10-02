import { Platform, StyleSheet, View, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import Botao from '@/components/Botao/Botao';
import { useNavigation } from '@react-navigation/native';

export default function Dashbord() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    try {
      navigation.navigate('Tomada' as never);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível navegar');
      console.error('Erro de navegação:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Olá</ThemedText>
      
      <Botao 
        style={styles.margem} 
        title="Geladeira" 
        onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#f5f5f5',
  },
  margem: {
    padding: 12,
    marginVertical: 8,
    width: '80%',
  }
});
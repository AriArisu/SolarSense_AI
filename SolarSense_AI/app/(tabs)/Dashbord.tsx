import { Platform, StyleSheet, View, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import Botao from '@/components/Botao/Botao';

export default function Dashbord() {


  return (
    <View style={styles.container}>

      

      <ThemedText type="title">Olá</ThemedText>
      
      <Botao 
        style={styles.margem} 
        title="Geladeira" 
        navigateTo="Tomada"
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
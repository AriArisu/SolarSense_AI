import { StyleSheet, View, Image } from 'react-native';
import { ThemedText } from '@/components/Nao_sei_se_posso_apagar/themed-text';
import Botao from '@/components/Botao/Botao';


const geladeiraImage = require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png');

export default function Dashbord() {
  return (
    <View style={styles.container}>

      <Image
        source={geladeiraImage}
        style={styles.logo}
        resizeMode="contain"
      />

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
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 24,
  },
});

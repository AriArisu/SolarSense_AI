// No seu componente
import { Text } from 'react-native';

const urlApi = process.env.EXPO_PUBLIC_API_URL;

const ExibirUrl = () => {
  return <Text>URL da API: {urlApi}</Text>;
};

export default ExibirUrl;
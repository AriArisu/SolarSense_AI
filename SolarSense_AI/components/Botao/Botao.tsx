import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/components/Botao/botaoRtoas';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface BotaoProps {
  style?: ViewStyle;
  title?: string;
  onPress?: () => void;
  navigateTo?: keyof RootStackParamList; 
  params?: any;
}

const Botao: React.FC<BotaoProps> = ({ 
  style, 
  title = "Botão", 
  onPress, 
  navigateTo, 
  params 
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo, params); 
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <LinearGradient
        colors={['#FE7457', '#E60013']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Botao;

const styles = StyleSheet.create({
  linearGradient: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.08,
    borderRadius: 17,
    alignSelf: 'center',
  },
  innerContainer: {
    borderRadius: 10,
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Alexandria',
    textAlign: 'center',
    color: '#6b696aff',
  },
});

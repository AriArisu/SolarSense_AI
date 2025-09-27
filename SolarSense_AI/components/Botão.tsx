import { Background, } from "@react-navigation/elements"
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Botão = () => {
  return (
      <LinearGradient
        colors={['#FE7457', '#E60013']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>THIS GRADIENT BORDER</Text>
        </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 135,
    width: 500,
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Alexandria',
    textAlign: 'center',
    margin: 10,
    color: '#6b696aff',
    backgroundColor: 'transparent',
  },
});

export default Botão;
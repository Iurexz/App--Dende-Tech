import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation

const { width } = Dimensions.get('window');

export default function TelaInicio() {
  const navigation = useNavigation(); // Obtendo o objeto de navegação

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Caminho da sua imagem
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('TelaPrincipal')} // Navegando para TelaPrincipal
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: width * 0.6, // Ajusta a largura da imagem proporcionalmente
    height: width * 0.6, // Ajusta a altura da imagem proporcionalmente
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

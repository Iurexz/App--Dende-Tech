import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function TelaPrincipal({ navigation }) { // Adicione o parâmetro navigation
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Coloque o caminho correto da sua imagem
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('TelaPergunta')} // Adiciona a navegação ao botão
      >
        <Text style={styles.buttonText}>Enviar uma pergunta</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Desempenho')} // Adiciona a navegação ao botão
      >
        <Text style={styles.buttonText}>Desempenho da Turma</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Planos')} // Adiciona a navegação ao botão
      >
        <Text style={styles.buttonText}>App Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Banco')} // Adiciona a navegação ao botão
      >
        <Text style={styles.buttonText}>Banco de Dados</Text>
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
    width: width * 0.8, // Ajusta a largura da imagem proporcionalmente
    height: width * 0.8, // Ajusta a altura da imagem proporcionalmente
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
    marginVertical: 10, // Espaçamento entre os botões
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

//Iure Dev.
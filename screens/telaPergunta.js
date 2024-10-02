import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function TelaPergunta() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/images/logo.png')} // Coloque o caminho correto da sua imagem
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Olá professor(a), insira suas perguntas.</Text>
        
        {/* Campos de entrada */}
        {Array.from({ length: 8 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Pergunta ${index + 1}`}
            placeholderTextColor="#aaa"
          />
        ))}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.3,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: width * 0.9, // Ajusta a largura do campo de entrada
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9', // Cor de fundo para os campos de entrada
    elevation: 1, // Sombra leve para os campos
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
    marginVertical: 10, // Menor margem vertical
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

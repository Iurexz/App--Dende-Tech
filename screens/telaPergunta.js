import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Image, Alert } from 'react-native';

const { width } = Dimensions.get('window');

export default function TelaPergunta() {
  const [questions, setQuestions] = useState(Array(6).fill('')); // Estado para armazenar as 6 perguntas

  // Função que será chamada ao clicar no botão "Enviar"
  const handleSendPress = () => {
    // Verificar se todas as perguntas foram preenchidas
    const allFilled = questions.every(question => question.trim() !== '');

    if (allFilled) {
      Alert.alert("Confirmação", "Perguntas enviadas com sucesso!");
    } else {
      Alert.alert("Erro", "Por favor, preencha todas as perguntas antes de enviar.");
    }
  };

  // Função para atualizar o valor de cada pergunta
  const handleInputChange = (text, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = text;
    setQuestions(newQuestions);
  };

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
        
        {/* Campos de entrada para 6 perguntas */}
        {Array.from({ length: 6 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Pergunta ${index + 1}`}
            placeholderTextColor="#aaa"
            value={questions[index]} // Valor controlado do input
            onChangeText={text => handleInputChange(text, index)} // Atualizar o estado ao digitar
          />
        ))}

        <TouchableOpacity style={styles.button} onPress={handleSendPress}>
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
    marginTop: 30, // Botão mais acima
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});


//Iure Dev.
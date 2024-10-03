import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function Pagamento({ navigation }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expirationDate || !cvv) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      // Processar pagamento (simulação)
      Alert.alert('Sucesso', 'Pagamento realizado com sucesso!');
      navigation.navigate('Planos'); // Voltar para a tela de planos
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pagamento</Text>

      <Card style={styles.card}>
        <Card.Title title="Detalhes do Cartão" />
        <Card.Content>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Expiração (MM/AA)"
            value={expirationDate}
            onChangeText={setExpirationDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry
          />
        </Card.Content>
      </Card>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: width * 0.9,
    marginBottom: 20,
    elevation: 3,
    borderRadius: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

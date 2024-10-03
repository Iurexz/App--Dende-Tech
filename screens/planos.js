import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function AppPremium({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu Pacote:</Text>

      {/* Plano Dendezinho */}
      <Card style={styles.card}>
        <Card.Title title="PACOTE DENDEZINHO" />
        <Card.Content>
          <Text style={styles.text}>• Envio de pergunta ao tabuleiro</Text>
          <Text style={styles.text}>• Acesso limitado até 3 perguntas do banco de dados</Text>
          <Text style={styles.text}>• Acesso até três áreas de disciplinas</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('PaymentScreen')}>
            Escolher Dendezinho
          </Button>
        </Card.Actions>
      </Card>

      {/* Plano Dendê */}
      <Card style={styles.card}>
        <Card.Title title="PACOTE DENDÊ" />
        <Card.Content>
          <Text style={styles.text}>• Envio de perguntas ao tabuleiro</Text>
          <Text style={styles.text}>• Acesso limitado até 8 perguntas do banco de dados</Text>
          <Text style={styles.text}>• Acesso até cinco áreas de disciplinas</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('PaymentScreen')}>
            Escolher Dendê
          </Button>
        </Card.Actions>
      </Card>

      {/* Plano Dendezão */}
      <Card style={styles.card}>
        <Card.Title title="PACOTE DENDEZÃO" />
        <Card.Content>
          <Text style={styles.text}>• Envio de perguntas ao tabuleiro</Text>
          <Text style={styles.text}>• Acesso ilimitado ao banco de dados</Text>
          <Text style={styles.text}>• Acesso ilimitado a todas as áreas do conhecimento</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('PaymentScreen')}>
            Escolher Dendezão
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    elevation: 4, // Sombra para o card
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

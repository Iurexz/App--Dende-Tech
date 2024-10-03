import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress'; // Usando react-native-progress para gráficos circulares
import { FontAwesome } from '@expo/vector-icons'; // Ícone de seta

const { width } = Dimensions.get('window');

export default function DesempenhoTurma() {
  const handleGeneralButtonPress = () => {
    console.log('Botão "Geral" pressionado!');
  };

  return (
    <View style={styles.container}>
      {/* Logo e Título */}
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>DESEMPENHO</Text>
      </View>

      {/* Seção de desempenho da turma */}
      <View style={styles.performanceItem}>
        <Progress.Circle size={70} progress={0.86} color={'orange'} borderWidth={3} />
        <Text style={styles.performanceText}>TURMA</Text>
        <Text style={styles.performancePercentage}>86%</Text>
      </View>

      {/* Seção de desempenho das equipes */}
      <View style={styles.performanceItem}>
        <Progress.Circle size={70} progress={0.78} color={'orange'} borderWidth={3} />
        <Text style={styles.performanceText}>EQUIPES</Text>
        <Text style={styles.performancePercentage}>78%</Text>
      </View>

      {/* Seção de desempenho do aluno */}
      <View style={styles.performanceItem}>
        <Progress.Circle size={70} progress={0.94} color={'orange'} borderWidth={3} />
        <Text style={styles.performanceText}>ALUNO</Text>
        <Text style={styles.performancePercentage}>94%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,  // Aumentei a largura
    height: 150,  // Aumentei a altura
    resizeMode: 'contain', // Garante que a logo não seja distorcida
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  performanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginVertical: 15,
  },
  performanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  performancePercentage: {
    fontSize: 18,
    color: '#555',
  },
  generalButton: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 25,
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  generalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
});


//Iure Dev.
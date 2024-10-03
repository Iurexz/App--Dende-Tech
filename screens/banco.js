import React from 'react';
import { View, Text, SectionList, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Lista de dados
const DATA = [
  { title: 'C', data: ['Colonialismo', 'Comunismo', 'Confúcio', 'Crise de 1929', 'Cruzadas', 'Civilização Maia'] },
  { title: 'D', data: ['Democracia', 'Descolonização', 'Ditadura', 'Divisão da Alemanha'] },
  { title: 'E', data: ['Era Medieval', 'Expansionismo'] },
  // Adicione mais itens conforme necessário
];

const BancoScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Cabeçalho com o logo e ícones */}
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/images/logo.png')} // Coloque o caminho correto da sua imagem
          style={styles.logo}
          resizeMode="contain"
        />
        </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>

      {/* Lista Alfabética */}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
        style={styles.list}
      />

      {/* Menu inferior (fixo) */}
      
      </View>
    
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  bellIcon: {
    marginRight: 15,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    paddingVertical: 5,
    color: '#000',
    backgroundColor: '#f3f3f3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerButton: {
    padding: 10,
  },
  addButton: {
    backgroundColor: '#f07',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default BancoScreen;

import React, { useState } from 'react';
import { View, Text, SectionList, TextInput, StyleSheet, Image } from 'react-native';

// Lista de dados
const DATA = [
  {
    title: 'LINGUAGENS',
    data: ['Língua Portuguesa', 'Artes', 'Educação Física', 'Inglês']
  },
  {
    title: 'HUMANAS',
    data: ['História', 'Geografia', 'Sociologia', 'Filosofia']
  },
  {
    title: 'MATEMÁTICA',
    data: [''] // Adicione itens se necessário
  },
  {
    title: 'NATUREZA',
    data: ['Física', 'Química', 'Biologia']
  }
];

const BancoScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar dados com base na consulta de pesquisa
  const filteredData = DATA.map(section => ({
    title: section.title,
    data: section.data.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(section => section.data.length > 0); // Remover seções sem dados

  return (
    <View style={styles.container}>
      {/* Cabeçalho com o logo */}
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
          placeholder="Pesquisar"
          value={searchQuery}
          onChangeText={setSearchQuery} // Atualiza a consulta de pesquisa
        />
      </View>

      {/* Lista de Áreas do Conhecimento */}
      <SectionList
        sections={filteredData} // Use a lista filtrada
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerTitle}>{title}</Text>
        )}
        style={styles.list}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo levemente cinza
  },
  innerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff', // Fundo branco para os itens
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  headerTitle: {
    fontSize: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    paddingVertical: 5,
    color: '#fff', // Texto em branco
    backgroundColor: 'orange', // Cor de fundo da seção
    paddingHorizontal: 10,
  },
});

export default BancoScreen;

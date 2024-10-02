import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from './screens/telaInicio'; // Importando telaInicio
import TelaPrincipal from './screens/telaPrincipal'; // Importando telaPrincipal
import TelaPergunta from './screens/telaPergunta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicio">
        <Stack.Screen
          name="TelaInicio"
          component={TelaInicio}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela inicial
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela principal
        />
        <Stack.Screen
          name="TelaPergunta"
          component={TelaPergunta}
          options={{ title: 'Perguntas' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





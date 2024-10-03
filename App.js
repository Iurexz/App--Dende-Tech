import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from './screens/telaInicio'; // Importando telaInicio
import TelaPrincipal from './screens/telaPrincipal'; // Importando telaPrincipal
import TelaPergunta from './screens/telaPergunta';
import Desempenho from './screens/desempenho';
import Planos from './screens/planos';
import Pagamento from './screens/pagamento';
import Banco from './screens/banco';

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
        <Stack.Screen
          name="Desempenho"
          component={Desempenho}
          options={{ title: 'Desempenho' }} 
        />
        <Stack.Screen
          name="Planos"
          component={Planos}
          options={{ title: 'Planos' }} 
        />
        <Stack.Screen
          name="Pagamento"
          component={Pagamento}
          options={{ title: 'Pagamento' }} 
        />
        <Stack.Screen
          name="Banco"
          component={Banco}
          options={{ title: 'Banco' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





import React from 'react';
import {SafeAreaView} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Ligacoes from './pages/Ligacoes';
import Contatos from './pages/Contatos';
import Conversas from './pages/Conversas';
import Conversa from './pages/Conversa';

import padroes from './styles/default';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <AppTabNavigator />
      </SafeAreaView>
    );
  }
}

const ConversasStack = createStackNavigator({
  Home: Conversas,
  Conversa: Conversa,
});

const AppTabNavigator = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Ligações: Ligacoes,
      Conversas: ConversasStack,
      Contatos: Contatos,
    },
    {
      tabBarPosition: 'top',
      initialRouteName: 'Conversas',
      defaultNavigationOptions: {
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          style: {
            backgroundColor: padroes.cores.primaria,
          },
        },
      },
    },
  ),
);

ConversasStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == 'Conversa') {
    tabBarVisible = false;
  }
  return {tabBarVisible};
};

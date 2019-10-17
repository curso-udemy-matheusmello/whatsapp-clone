import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import api from './../services/api';
import padroes from './../styles/default';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Contatos extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderItem({item}) {
    return (
      <View style={styles.container_contato}>
        <Image source={item.imagem} style={styles.imagem} />
        <View style={styles.container_info}>
          <View style={styles.container_central}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.numero_container}>
              <Text style={styles.numero}>{item.numero}</Text>
            </View>
          </View>
          <View style={styles.container_direita}>
            <TouchableOpacity>
              <Ionicons
                name={'md-person-add'}
                size={25}
                color={padroes.cores.verde_claro}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={api.exemplo_de_conversas}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `list-item-${index}`}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginRight: 10,
  },
  container_contato: {
    flexDirection: 'row',
    marginHorizontal: 8,
    height: 70,
  },
  numero: {
    color: 'grey',
  },
  container_direita: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container_info: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: padroes.cores.cinza,
    borderBottomWidth: 1.5,
  },
  container_central: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 15.5,
  },
});

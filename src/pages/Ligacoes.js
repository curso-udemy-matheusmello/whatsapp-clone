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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Ligacoes extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderItem({item}) {
    return (
      <View style={styles.container_ligacao}>
        <Image source={item.imagem} style={styles.imagem} />
        <View style={styles.container_info}>
          <View style={styles.container_central}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.ligacoes_container}>
              <MaterialIcons
                name={item.call}
                size={18}
                color={
                  item.call == 'call-received'
                    ? 'red'
                    : padroes.cores.verde_claro
                }
              />
              <Text numberOfLines={1} style={styles.data_ligacao}>
                {item.data_ligacao}
              </Text>
            </View>
          </View>
          <View style={styles.container_direita}>
            <TouchableOpacity>
              <Ionicons
                name={
                  item.tipo_de_ligacao == 'cel' ? 'ios-call' : 'ios-videocam'
                }
                color={padroes.cores.primaria_claro}
                size={24}
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
          data={api.exemplo_de_ligacoes}
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
  container_ligacao: {
    flexDirection: 'row',
    marginHorizontal: 8,
    height: 70,
  },
  ligacoes_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  container_central: {
    flex: 1,
    justifyContent: 'center',
  },
  container_info: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: padroes.cores.cinza,
  },
  container_direita: {
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'space-evenly',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 15.5,
  },
  data_ligacao: {
    color: 'grey',
  },
});

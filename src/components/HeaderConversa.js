import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import padroes from './../styles/default';

export default class HeaderConversa extends Component {
  render() {
    const parametro = this.props.navigation.getParam('perfil', null);

    return (
      <View style={styles.container}>
        <View style={styles.container_left}>
          <TouchableOpacity
            style={styles.icone_voltar}
            onPress={() => this.props.navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              color="white"
              size={30}
              style={{alignSelf: 'center'}}
            />
            <Image source={parametro.imagem} style={styles.imagem} />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.cabeçalho}>
            {parametro.nome}
          </Text>
        </View>
        <View style={styles.container_direita}>
          <TouchableOpacity>
            <Entypo name="attachment" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  container: {
    minHeight: 65,
    maxHeight: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: padroes.cores.primaria,
    flex: 1,
  },
  cabeçalho: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    alignSelf: 'center',
  },
  container_left: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },
  icone_voltar: {
    flexDirection: 'row',
  },
  container_direita: {
    flexDirection: 'row',
    paddingRight: 10,
    width: 80,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

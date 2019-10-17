import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import api from './../services/api';
import padroes from './../styles/default';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderConversa from './../components/HeaderConversa';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Conversa extends Component {
  static navigationOptions = {
    header: null,
  };

  renderItem = ({item}) => {
    return (
      <View
        style={
          item.usuario == '1'
            ? styles.mensagem_container
            : styles.mensagem_container_remetente
        }>
        <View
          style={
            item.usuario == '1' ? styles.mensagem : styles.mensagem_remetente
          }>
          <Text>{item.mensagem}</Text>
          <Text style={styles.horario_mensagem}>{item.horario_mensagem}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('./../assets/images/wallpaper_whats.png')}
          style={{width: '100%', height: '100%'}}>
          <HeaderConversa {...this.props} />
          <FlatList
            data={api.exemplo_de_conversa_pessoal}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `list-item-${index}`}
            style={{marginBottom: 10}}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.inserir_texto_container}>
            <TextInput
              placeholder="Insira o seu texto aqui"
              style={styles.inserir_texto}
            />
            <View style={styles.botao_enviar}>
              <TouchableOpacity style={styles.botao_enviar}>
                <Ionicons
                  style={{alignSelf: 'center'}}
                  name="md-send"
                  color="white"
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inserir_texto_container: {
    flex: 1,
    minHeight: 45,
    maxHeight: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  inserir_texto: {
    maxHeight: 50,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 18,
    paddingLeft: 10,
  },
  botao_enviar: {
    backgroundColor: padroes.cores.primaria_claro,
    height: 45,
    width: 45,
    borderRadius: 30,
    marginLeft: 5,
    justifyContent: 'center',
  },
  mensagem_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  mensagem_container_remetente: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  horario_mensagem: {
    color: 'grey',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  mensagem: {
    padding: 8,
    backgroundColor: padroes.cores.verde_limao,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mensagem_remetente: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
});

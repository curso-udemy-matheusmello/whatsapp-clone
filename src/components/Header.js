import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import padroes from './../styles/default';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cabeçalho}>Whatsapp Clone</Text>
        <View style={styles.container_direita}>
          <TouchableOpacity>
            <FontAwesome name="search" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="message-reply-text"
              color="white"
              size={20}
            />
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
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: padroes.cores.primaria,
  },
  cabeçalho: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    alignSelf: 'center',
  },
  container_direita: {
    flexDirection: 'row',
    paddingRight: 10,
    width: 120,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

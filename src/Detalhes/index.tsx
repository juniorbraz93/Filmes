import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Detalhes = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={styles.textVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tituloFilme}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.sinopseText}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
};

export default Detalhes;

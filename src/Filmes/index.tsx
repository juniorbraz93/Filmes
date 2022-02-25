import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Modal} from 'react-native';

import styles from './styles';
import Detalhes from '../Detalhes';

const Filmes = ({data}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image source={{uri: data.foto}} style={styles.capa} />

        <View style={styles.areaBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.btnTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
};

export default Filmes;

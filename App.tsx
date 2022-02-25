/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';
import Colors from './src/config/Color';

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');

      // console.log(response);

      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);
  if (loading) {
    return (
      <View style={styles.viewLoading}>
        <ActivityIndicator color={Colors.black} size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;

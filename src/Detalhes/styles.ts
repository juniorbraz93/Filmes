import {StyleSheet} from 'react-native';
import Colors from '../config/Color';

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: Colors.black,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: Colors.red,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textVoltar: {
    color: Colors.white,
    fontSize: 16,
  },
  tituloFilme: {
    textAlign: 'center',
    color: Colors.white,
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  sinopseText: {
    color: Colors.white,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;

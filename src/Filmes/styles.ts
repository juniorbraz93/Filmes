import {StyleSheet} from 'react-native';
import Colors from '../config/Color';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    margin: 15,
    elevation: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  areaBtn: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  btn: {
    width: 100,
    backgroundColor: Colors.blue,
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  btnTexto: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default styles;

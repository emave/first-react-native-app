import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    borderRadius: 10
  },
  item: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
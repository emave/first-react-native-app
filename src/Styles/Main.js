import {StyleSheet} from 'react-native';
import {COLOR} from "react-native-material-ui";

export const MainStyle = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.1
  },
  error: {
    fontSize: 12,
    color: COLOR.red500,
    textAlign: 'center',
    marginTop: 3
  }
});
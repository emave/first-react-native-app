import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './src/Components/HomeMain';
import DetailsScreen from './src/Components/DetailsScreen';
import React from 'react';
import {ThemeContext, getTheme, COLOR} from 'react-native-material-ui';
import {Provider} from 'react-redux';
import store from './src/Reducers';

const uiTheme = {};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Weather on 5 days'
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details'
    }
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: COLOR.blue500,
    },
  }
});

const App = createAppContainer(AppNavigator);

export default () => <ThemeContext.Provider value={getTheme(uiTheme)}>
  <Provider store={store}>
    <App/>
  </Provider>
</ThemeContext.Provider>
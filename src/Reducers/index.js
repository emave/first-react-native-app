import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import weather from './weatherReducer';
import input from './inputReducer';
import currentDay from './currentDayReducer';
import {watchInputChangeAsync} from "../Sagas";

const readyCombinedReducers = combineReducers({
  weather,
  input,
  currentDay
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  readyCombinedReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchInputChangeAsync);

export default store;




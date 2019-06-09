import { put, takeEvery } from 'redux-saga/effects';
import {weatherConstants} from "../Constants";
import axios from 'axios';

function* InputChangeAsync({value}) {
  let res;
  //Making loader circle in GUI while fetching
  yield put({ type: weatherConstants.WEATHER_REQUEST, value: value });

  //Fetching
  try {
    res = yield axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=db6ff8b880388529d6d8000a15491c51&units=metric`);
  }catch (e) {
    yield put({ type: weatherConstants.WEATHER_ERROR, error: e.message.toLowerCase() === 'request failed with status code 404' ? 'Nothing found' : e.message});
    return;
  }

  //Fetching SUCCESS
  yield put({ type: weatherConstants.WEATHER_SUCCESS, data: res.data });
}

export function* watchInputChangeAsync() {
  yield takeEvery(weatherConstants.WEATHER_SEARCH, InputChangeAsync)
}
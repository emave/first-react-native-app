import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {HomeStyle, MainStyle} from "../Styles";
import {Button, COLOR} from 'react-native-material-ui';
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {inputChange, weatherSearch, currentDayChange} from "../Actions";

//Just want to make month not a number
const getNameFromDate = (val) => {
  let month;
  let ymd = val.split(' ')[0];
  let day = new Date(ymd).getDate();
  let monthNumber = ymd.split('-')[1];

  switch (monthNumber) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
    default:
      month = ''
  }
  return month + ' ' + day
};

export const HomeComponent = (props) => {
  const {input, navigation: {navigate}, inputChange, searchWeather, weather: {data: {city, list}, request, error}, currentDayChange} = props;
  const [listByDay, setListByDay] = useState([]);

  //If list changed - make new sorting by Days
  useEffect(() => {
    if(list) {
      let result = {};
      for (const item of list) {
        //Current date without time stamp
        const data = new Date(item.dt_txt.split(' ')[0]);
        if (!result[data]) {
          result[data] = []
        }
        result[data].push(item);
      }
      //SetState Array with sorted list by Day to listByDay
      setListByDay(result);
    }
  }, [list]);

  //Pushing selected Day to reducer by click
  const goToDetails = (currentDay) => {
    currentDayChange(currentDay);
    //Going to details
    navigate('Details')
  };

  return (
    <View style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

      {/*Input field with button for sending a city name*/}
      <View style={HomeStyle.container}>
        <TextField
          onChangeText={(text) => inputChange(text)}
          label={'Search'}
          containerStyle={HomeStyle.input}
          value={input.value}
        />
        <Button
          text=""
          primary
          raised
          icon='search'
          onPress={() => searchWeather(input.value)}
          style={{height: '100%'}}
        />
      </View>

      {/*While fetching a new data*/}
      {request && <View style={HomeStyle.item}>
        <View>
          <ActivityIndicator size="large" color={COLOR.blue500} />
        </View>
      </View>}

      {/*If we have an error*/}
      {error && !request && <Text style={MainStyle.error}>{error}</Text>}

      {/*Current city name*/}
      {city && !request && <Text style={HomeStyle.welcome}>Current city: {city.name}</Text>}

      {/*List of dates in scrolling block*/}
      {listByDay && !request && <ScrollView>
        { Object.values(listByDay).map((item, key) =>
          <View
            key={key}
            style={{padding: 5}}
          >
            <Button
              text={getNameFromDate(item[0].dt_txt)}
              primary
              raised
              onPress={() => goToDetails(item)}
            />
          </View>)}
      </ScrollView>}

    </View>
  )
};

const mapStateToProps = ({input, weather}) => ({input, weather});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (newValue) => inputChange(newValue)(dispatch),
  searchWeather: (newValue) => weatherSearch(newValue)(dispatch),
  currentDayChange: (currentDay) => currentDayChange(currentDay)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
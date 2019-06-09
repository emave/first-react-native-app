import React from 'react';
import {connect} from "react-redux";
import {Text, View, ScrollView} from 'react-native';
import {MainStyle} from "../Styles";
import {DetailsStyle} from "../Styles";


const DetailsScreen = (props) => {
  const {currentDay, weather: {data: {city}}} = props;

  return (
    <View style={DetailsStyle.container}>
      {/*Current date*/}
      <Text style={DetailsStyle.header}>{city.name + ' ' + currentDay[0].dt_txt.split(' ')[0]}</Text>

      {/*List of weather of selected day by time*/}
      <ScrollView>
        {currentDay && currentDay.map(({dt_txt, main, weather}, key) => <View key={key} style={DetailsStyle.weatherItem}>
          <Text style={MainStyle.boldText}>{dt_txt.split(' ')[1]}</Text>
          <Text style={MainStyle.boldText}>Temp: <Text style={{fontWeight: 'normal'}}>{main.temp}</Text></Text>
          <Text style={MainStyle.boldText}>Weather: <Text style={{fontWeight: 'normal'}}>{weather[0].main}</Text></Text>
        </View>)}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({currentDay, weather}) => ({currentDay, weather});

export default connect(mapStateToProps)(DetailsScreen)
import React from 'react';
import { SafeAreaView, StyleSheet, Button, View, ActivityIndicator, Text } from 'react-native';
import Config from 'react-native-config';
import Axios from 'axios';

class SingleCityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityData: null
    }
  }
  //290,45 K − 273,15 = 17,3 °C
  componentDidMount() {
    console.log(Config)
    let cityName = this.props.route.params.cityName;
    this.getWeatherData(cityName)
  }
  getWeatherData(cityName) {
    console.log(Config.APIHOST, Config.APIKEY)
    Axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?&q=${cityName}`, {
      "headers": {
        "x-rapidapi-host": `${Config.APIHOST}`,
        "x-rapidapi-key": `${Config.APIKEY}`
      }
    })
      .then(async response => {
        let res = response.data
        this.setState({
          loading: false,
          cityData: res
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          {this.state.loading && <ActivityIndicator />}
          {!this.state.loading &&
            <View>
              <Text style={styles.titleStyle}>{this.state.cityData.name}</Text>
              <View style={styles.tempView}>
                <Text >Temp: {(this.state.cityData.main.temp - 273.15).toFixed(1)} °C</Text>
                <Text>Temp - Feels like: {(this.state.cityData.main.feels_like - 273.15).toFixed(1)} °C</Text>
              </View>
              <View style={styles.windView}>
                <Text style={styles.windTitle}>Wind</Text>
                <View style={styles.windDetailsView}>
                  <Text>Speed: {this.state.cityData.wind.speed} </Text>
                  <Text>Deg: {this.state.cityData.wind.deg} </Text>
                </View>
              </View>
            </View>
          }
        </View>
      </SafeAreaView>
    )
  }
}


export default (SingleCityScreen);

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20
  },
  tempView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  titleStyle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  windView: {
    marginTop: 30
  },
  windDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  windTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  }

})
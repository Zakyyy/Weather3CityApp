import React from 'react';
import { SafeAreaView, StyleSheet, Button, View, ActivityIndicator, Text, Image } from 'react-native';
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
        console.log(res)
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
              <View>
                {/* <Text style={styles.headerTitleStyle}>Temprature</Text> */}
                <View style={styles.tempView}>
                  <View style={styles.singleItemContainer}>
                    <Text style={styles.singleItemTitle}>Current</Text>
                    <Text style={styles.singleItemBody}>{(this.state.cityData.main.temp - 273.15).toFixed(1)} <Text style={styles.degreeStyle}>°C</Text></Text>
                  </View>
                  <View style={styles.singleItemContainer}>
                    <Text style={styles.singleItemTitle}>Feels</Text>
                    <Text style={styles.singleItemBody}>{(this.state.cityData.main.feels_like - 273.15).toFixed(1)} <Text style={styles.degreeStyle}>°C</Text></Text>
                  </View>
                </View>
              </View>
              <View style={styles.windView}>
                <View style={styles.windContainer}>
                  {/* <Text style={styles.windTitle}>Wind</Text> */}
                  <Image
                    source={require('../assets/wind.png')}
                    style={styles.imageStyle}
                  />
                  <View style={styles.windDetailsView}>
                    <Text style={styles.singleWindItemBody}>{this.state.cityData.wind.speed} <Text style={styles.windMetricStyle}>Km/Hr</Text></Text>
                    <Text style={styles.singleWindItemBody}>{this.state.cityData.wind.deg} <Text style={styles.windMetricStyle}>°</Text></Text>
                  </View>
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
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'rgb(23,136,244)'
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(23,136,244)',
    marginTop: 20
  },
  windView: {
    marginTop: 30
  },
  windDetailsView: {
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  windTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  singleItemContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, paddingVertical: 10
  },
  singleItemTitle: {
    fontSize: 20, fontWeight: 'bold', color: 'white'
  },
  singleItemBody: {
    fontSize: 50,
    color: 'white',
    marginTop: 10
  },
  degreeStyle: {
    fontSize: 40,
    color: 'rgba(255,255,255,0.6)',
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'flex-start'
  },
  windContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 5, paddingVertical: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  singleWindItemBody: {
    fontSize: 40,
    color: 'white',
  },
  windMetricStyle: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.6)',
  }

})
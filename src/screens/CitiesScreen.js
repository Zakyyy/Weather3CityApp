import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';

class CitiesScreen extends React.Component {
  //290,45 K − 273,15 = 17,3 °C
  navigateToDetails(cityName) {
    this.props.navigation.navigate('Details', {
      cityName
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <Button
            title="Cairo"
            onPress={() => this.navigateToDetails('Cairo')}
          />
          <Button
            title="Alexandria"
            onPress={() => this.navigateToDetails('Alexandria')}

          />
          <Button
            title="Rome"
            onPress={() => this.navigateToDetails('Rome')}
          />
          {/* <View style={styles.buttonStyle}> */}

          {/* <Button
              title="Cairo"
              onPress={() => this.navigateToDetails('Cairo')}
              color='white'
            />
          </View>
          <Button
            title="Alexandria"
            onPress={() => this.navigateToDetails('Alexandria')}
          />
          <Button
            title="Rome"
            onPress={() => this.navigateToDetails('Rome')}
          /> */}

        </View>
      </SafeAreaView>
    )
  }
}


export default (CitiesScreen);

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'rgb(23,136,244)',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(23,136,244)', 
    paddingHorizontal: 20
  },

})
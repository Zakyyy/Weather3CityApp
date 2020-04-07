import React from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';

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

        </View>
      </SafeAreaView>
    )
  }
}


export default (CitiesScreen);

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  }
})
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

export const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%', height: 100, borderRadius: 16, backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center', justifyContent: 'center', marginVertical: 10
  },
  textStyle: {
    fontSize: 20, fontWeight: 'bold', color: 'white'
  }
})
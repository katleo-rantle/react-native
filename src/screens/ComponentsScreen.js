import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const msg = 'Getting started with React Native!';
  const name = 'Katleo';
  return (
    <View>
      <Text style={styles.textStyle}>{msg}</Text>
      <Text style={styles.subHeadingStyle}>my name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeadingStyle: {
    fontSize: 20,
    color: 'blue',
  },
});

export default ComponentsScreen;

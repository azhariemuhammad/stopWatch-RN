import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Stopwatch  from './src/components/Stopwatch'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Hello</Text>
      <Stopwatch/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';

export default DisplayTimer = props => {
    return (
      <View>
          <Text>Display Timer</Text>
          <Text>{props.currentCount}</Text>
          <Text>secs: {props.secs}</Text>
          <Text>mins: {props.mins}</Text>
          <Text>hours: {props.hours}</Text>
      </View>
    )
}

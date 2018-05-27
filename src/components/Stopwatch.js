import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

import DisplayTimer from './DisplayTimer';
class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentCount: 0,
          secs: 0,
          mins: 0,
          hours: 0
        }
      }
    timer() {
        let { currentCount, secs, mins, hours } = this.state
            this.setState({
                currentCount: currentCount + 1
            })
        if (currentCount === 10) {
            this.setState({
            secs: secs + 1,
            currentCount: 0
            })
        } else if (secs === 59) {
            this.setState({
            secs: 0,
            mins: mins + 1
            })
        } else if (mins === 59) {
            this.setState({
            mins: 0,
            hours: hours + 1
            })
        }
    }
    componentDidMount() {
    
    }

    handleStart() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
    }

    handleStop() {
        clearInterval(this.intervalId)
    }

    handleReset() {
        this.setState({currentCount: 0, secs: 0, mins: 0, hours: 0})
        clearInterval(this.intervalId)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        return (    
            <View>
                <DisplayTimer 
                    currentCount={this.state.currentCount}
                    secs={this.state.secs}
                    mins={this.state.mins}
                    hours={this.state.hours}
                 />

                <Button 
                    onPress={this.handleStart.bind(this)}
                    title="Start"
                />
                <Button 
                    onPress={this.handleStop.bind(this)} 
                    title="Stop"
                />
                <Button 
                    onPress={this.handleReset.bind(this)}
                    title="Reset"
                />
            </View>
        )
    }
}

export default Stopwatch
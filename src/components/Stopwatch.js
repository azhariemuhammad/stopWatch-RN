import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

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
        if (currentCount === 100) {
            this.setState({
            secs: secs + 1,
            currentCount: 0
            })
        } else if (secs === 60) {
            this.setState({
            secs: 0,
            mins: mins + 1
            })
        } else if (mins === 60) {
            this.setState({
            mins: 0,
            hours: hours + 1
            })
        }
    }
    componentDidMount() {
    
    }

    handleStart() {
        this.intervalId = setInterval(this.timer.bind(this), 10);
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
            <Text>Time</Text>
        )
    }
}

export default Stopwatch
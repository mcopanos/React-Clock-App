import React, { Component } from 'react'
import { formatInTimeZone } from 'date-fns-tz'

export default class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null
    };
  }

  componentDidMount() {
    setInterval(
      () => this.tick(), 
      1000
    );
      this.convertTime();
  }

  tick() {
    const { format, state, } = this.props;
    const date = new Date();
    const getTime = formatInTimeZone(date, state, format);
    let newTime = getTime.split(':')
    let timeValue;
    let hours = Number(newTime[0])
    let minutes = Number(newTime[1])
    let seconds = Number(newTime[2].split(' ', 1))

    if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
      } else if (hours > 12) {
        timeValue= "" + (hours - 12);
      } else if (hours === 0) {
        timeValue= "12";
      }
      
      timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
      timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
      timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

    this.setState({
      date: timeValue,
    });
  }
  
  render() {
    const { zone } = this.props;
    const { date } = this.state;
    return (
        <div className='card'> 
            <h1>{zone} Time</h1>         
            <h2>{ date }</h2>    
      </div>
    )
  }
}

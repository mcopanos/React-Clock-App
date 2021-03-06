import React, { Component } from 'react'
import { formatInTimeZone } from 'date-fns-tz'
import Button from './Button';

export default class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      states: [],
      showStates: false
    };
  }

  componentDidMount() {
    setInterval(
      () => this.tick(), 
      1000
    );

    this.setState({
      states: [...this.props.states]
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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

  toggleStates = ()  => {
    const {showStates} = this.state
    this.setState({showStates: !showStates})
  }
  
  render() {
    const { zone } = this.props;
    const { date, states, showStates} = this.state;
    return (
      <div className='section'>
        <div className='card'> 
            <h1>{ zone } Time</h1>         
            <h2>{ date }</h2>
            <Button className='btn' toggleStates={this.toggleStates}/>
          
            
        </div>
        {
          showStates &&
          <div className='card-2'>
            { states.map((state, key) => (
              <ul>
                <li key={key}>
                  {state}
                </li>
              </ul>
            ))}
          </div>
        }
      </div>  
    )
  }
}

import React, { Component } from 'react'
import { formatInTimeZone } from 'date-fns-tz'

export default class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  
  componentDidMount() {
    setInterval(
      () => this.tick(), 
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { format, state, zone } = this.props;
    const date = new Date();
    return (
        <div className='card'> 
            <h1>{zone} Time</h1>         
            <h2>{formatInTimeZone(date, state, format)}</h2>      
      </div>
    )
  }
}

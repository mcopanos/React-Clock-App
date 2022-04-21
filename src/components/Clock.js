import React, { useEffect, useState  } from 'react'
import { formatInTimeZone } from 'date-fns-tz'

function Clock(props) {
  const [ setTime ] = useState();
  const date = new Date();
  const {zone, time} = props;

  useEffect(() => {
    setInterval(
      () => this.tick(), 
      1000
    );
  })

  this.tick = () => {
    setTime({
      date: new Date()
    });
  }

  return (
    <div>      
      <h1>Hello, world!</h1>      
      <h2>It is {formatInTimeZone(date, zone, time)}.</h2>    
    </div>
  )
}


export default Clock;
import { render } from '@testing-library/react';
import './App.css';
// import Clock from './components/Clock';
import ClockClass from './components/ClockClass';
function App(props) {
  
  return (
    <>
      <ClockClass 
        zone = 'East Coast'
        format = 'HH:mm:ss'
        state = 'America/New_York'
      /> 
      <ClockClass 
        zone = 'Central'
        format = 'HH:mm:ss'
        state = 'America/Chicago'
      /> 
      <ClockClass
        zone = 'Mountain'
        format = 'HH:mm:ss'
        state = 'America/Denver'
      /> 
      <ClockClass 
        zone = 'Pacific'
        format = 'HH:mm:ss'
        state = 'America/Los_Angeles'
      /> 
    </>  
  );
}

export default App;

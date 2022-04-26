import { render } from '@testing-library/react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  return (
    <>
      <Clock 
        zone = 'East Coast'
        format = 'HH:mm:ss'
        state = 'America/New_York'
      /> 
      <Clock 
        zone = 'Central'
        format = 'HH:mm:ss'
        state = 'America/Chicago'
      /> 
      <Clock
        zone = 'Mountain'
        format = 'HH:mm:ss'
        state = 'America/Denver'
      /> 
      <Clock 
        zone = 'Pacific'
        format = 'HH:mm:ss'
        state = 'America/Los_Angeles'
      /> 
    </>  
  );
}

export default App;

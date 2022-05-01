// import { render } from '@testing-library/react';
import './App.css';
import Clock from './components/Clock';

function App() {
  const eastCoast = ['ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NY', 'PA', 'CT', 'NJ', 'DE', 'MD', 'DC', 'MI', 'IN', 'OH', 'WV', 'VA', 'NC', 'SC', 'GA', 'FL', 'PR'];
  const central = ['WI', 'IL', 'KY', 'TN', 'AL', 'MS', 'LA', 'AR', 'MO','IA','MN','ND','SD','NE','KS','OK','TX'];
  const mountain = ['MT','WY','CO','NM','ID','UT','AZ'];
  const pacific = ['WA','OR','CA','NV']
  return (
    <>
      <Clock 
        zone = 'East Coast'
        format = 'HH:mm:ss'
        state = 'America/New_York'
        states = {eastCoast}
      /> 
      <Clock 
        zone = 'Central'
        format = 'HH:mm:ss'
        state = 'America/Chicago'
        states = {central}
      /> 
      <Clock
        zone = 'Mountain'
        format = 'HH:mm:ss'
        state = 'America/Denver'
        states = {mountain}
      /> 
      <Clock 
        zone = 'Pacific'
        format = 'HH:mm:ss'
        state = 'America/Los_Angeles'
        states = {pacific}
      /> 
    </>  
  );
}

export default App;

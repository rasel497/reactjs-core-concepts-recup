import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Noyakhali" speciality="vebag"></District>
      <District name="Chandpur" speciality="jilaa"></District>
      <District name="Dhaka" speciality="rajdhani"></District>
      <District name="Bramonriya" speciality="Joddha"></District>
    </div>
  );
}

// using css style in variable
const districtStyle = {
  backgroundColor: 'yellow',
  margin: '20px',
  padding: '5px',
  borderRadius: '20px'
}

// create a bsic Componant and css style
function District(props) {
  // create state and destructuring
  const [power, setPower] = useState(1);

  const bootsPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    // send dynamic data using props in APP show UI
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <p>Speciality: {props.speciality}</p>
      <h4>Power: {power}</h4>
      <button onClick={bootsPower}>Boots The Power</button>
    </div>
  )
}
export default App;

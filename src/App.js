import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District></District>
      <District></District>

    </div>
  );
}

// using css style in variable
const districtStyle = {
  backgroundColor: 'yellow',
  margin: '20px',
  borderRadius: '20px'
}

// create a bsic Componant and css style
function District() {
  return (
    <div style={districtStyle}>
      <h1>Name: </h1>
      <p>Speciality: </p>
    </div>
  )
}
export default App;

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

// create a bsic Componant and css style
function District() {
  return (
    <div className='district'>
      <h1>Name: </h1>
      <p>Speciality: </p>
    </div>
  )
}
export default App;

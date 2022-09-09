import './App.css';
import { useState } from 'react';

function App() {

  const [miles, setMiles] = useState ();
  const [kilometers, setKilometers] = useState (0);

  function handleSubmit(e) {
    e.preventDefault();
    setMiles (e.target.value);
    const result = miles * 1.60934;
    setKilometers(result);
  }

  return (
    <div>
      <h3>Miles to Kilometers</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Miles</label>
          <input type="text" placeholder="Miles here" onChange={e => setMiles(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Kilometers</label>
          <output>{kilometers}</output>
        </div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
    </div>
  );
}

export default App;

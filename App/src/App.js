import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = ({onSave, patient}) => {
  const [name, setName] = useState(patient?.name?.[0]?.given?.[0] || '');
  const [family, setFamily] = useState(patient?.name?.[0]?.family || '');
  const [gender, setGender] = useState(patient?.gender || '');
  const [birthDate, setBirthDate] = useState(patient?.birthDate || '');

  const handleSubmit = (e) => {
    
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>FHIR App</h1>
      <div>
        <label>First Name: </label>
        <input type="text" value={name} onChange={(e) => e.target.value}></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" value={family} onChange={(e) => e.target.value}></input>
      </div>
      <div>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => e.target.value}>
        <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <label>Birth Date:</label>
        <input type="date" value={birthDate} onChange={(e) => e.target.value}/>
      </div>
      <button type="submit">Save Data</button>
    </form>
  );
}



export default App;

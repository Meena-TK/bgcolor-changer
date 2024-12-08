import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Red');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };


  const colors = [
    'Red', 'White', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Gray'
  ];

  return (
      <div className="App" style={{ backgroundColor: color, minHeight: '100vh', fontFamily:'Georgia, Times New Roman, Times, serif', color: '#333' }}>
      <header className="App-header">
        <div className="card">
          <h1 className="title">Background Color Changer</h1>
          <select className="dropdown" value={color} onChange={handleColorChange}>
            {colors.map((clr) => (
              <option key={clr} value={clr}>
                {clr.charAt(0).toUpperCase() + clr.slice(1)}
              </option>
            ))}
          </select>
          <p className="selected-color">Selected color: <span style={{ fontWeight: 'bold' }}>{color}</span></p>
        </div>
      </header>
    </div>
  );
}

export default App

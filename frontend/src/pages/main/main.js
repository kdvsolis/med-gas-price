import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import "./main.css";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/gas_price')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <table style={{border: '1px solid black', borderCollapse: 'collapse', width: '100%', marginTop: '20px'}}>
          <thead>
            <tr>
              <th style={{border: '1px solid black', padding: '10px'}}>Datetime</th>
              <th style={{border: '1px solid black', padding: '10px'}}>Gas Price in AVAX</th>
              <th style={{border: '1px solid black', padding: '10px'}}>Gas Price in Dollar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{border: '1px solid black', padding: '10px'}}>{item.datetime}</td>
                <td style={{border: '1px solid black', padding: '10px'}}>{item.in_avax}</td>
                <td style={{border: '1px solid black', padding: '10px'}}>{item.in_dollar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Main;

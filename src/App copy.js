//states in react
import React, { useState } from 'react';


function App() {
  let [data, nextValue] = useState('This content will be changed on click')

  function changeState() {
    console.log('Changed text react')
    nextValue('Changed text react')
  } 

  console.log('______________')
  return (
    <div className="App">
      <p>{data}</p>
      <input type="button" value="click Me" onClick={changeState} />

    </div>
  );
}

export default App;

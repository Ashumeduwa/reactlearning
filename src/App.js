<<<<<<< HEAD
// import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import AccountClass from "./AccountsClass";
// import {Account} from "./Account";
// import {InputData} from "./Input";
// import Form from "./Form";
// import CalculateData from "./Props"
// import './App.css';
// import MyApps from "./ClassProps";
// import EffectValue from "./UseEffect"
// import BootStrap from "./bootStrap.js";
// this to validate the forms
import ChildCOmpinent from "./ChildComponent.js"

function App() {

  const printData = (data) => {
    return (
      <div>This data received form the parent component {data}</div>
    )
  }

  return (
    <div>
      {/* <CalculateData random={random} /> */}
      <ChildCOmpinent newData={printData} />
    </div>
  );
}
export default App;

//data coming formt he inout.js , this is to get the inout from the user
// function App() {
//   return (
// <InputData />
//   )
// }
// export default App;

//this is the example of the state
// function App() {
//   return (
//     <>
//     <AccountClass name="Ashutosh" src="./logo192.png" />;
//    <Account name="Ashutosh" src="./logo192.png" />;
//   </>
//   )
// }
// export default App;
//states in react
// let [data, nextValue] = useState('This content will be changed on click')
// function changeState() {
//   console.log('Changed text react')
//   nextValue('Changed text react')
// }

// console.log('______________')
// return (
//   <div className="App">
//     <p>{data}</p>
//     <input type="button" value="click Me" onClick={changeState} />

//   </div>
// );

=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> fixMerge

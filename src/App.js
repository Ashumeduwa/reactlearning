import React, { useState } from "react";
import AccountClass from "./AccountsClass";
// import {Account} from "./Account";
import {InputData} from "./Input";
import Form from "./Form";
import './App.css';


// this to validate the forms

function App() {
  return (
<Form />
  )
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


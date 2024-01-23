import React, { useState, Component } from "react";

// uisng the functional components
// use of the props and state and the same time
export const Account = (props) => {
    let [defaultData, newName] = useState('defaultData')
    return (
    <div >
      <h1>
       This data is comming form the functional component
        <b style={{ fontSize: "50px" }}> {defaultData}</b>
      </h1>
      <img src= {props.src} alt="User Image" /> <br/>
      <input type='button' value='clickMe' onClick={()=>{newName(props.name)}}></input>
    </div>
  );
};



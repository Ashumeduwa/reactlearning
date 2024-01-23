import React, { useState } from "react";

export const InputData = (props) => {
  let [defaultData, setDefaultData] = useState('Default text')
  let [showData, setShowData] = useState(true)
  function onChangeData(value) {
    setDefaultData(value.target.value)
    console.log(value.target.value);
  };
  return (
    <div>
      {showData ? <h1>{defaultData}</h1> : null}
      <input type="text" onChange={onChangeData} />
      <input type="button" value="Show/Hide" onClick={() => { setShowData(!showData) }} />
    </div>
  )
}
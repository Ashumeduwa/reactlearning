import './App.css';


function users() {
    function printData(){
        console.log('Data Printed')
    }
    return (
        <div>
        <h1>This data us comming form the user.js</h1>
        <input type="button" value="Click ME" onClick={()=>printData()}/>
        </div>
    );
  }
  
  export default users;
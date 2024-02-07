import React from "react";


class MyApps extends React.Component{
    constructor(){
        super();
        this.state = {
            data : Math.random()
        }
    }

    handleClick = () => {
        this.setState ({
            data : Math.random() 
        });
    };

    render() {
        return(
            <div className='myClass'>
            <input type="text" value= {this.state.data} readOnly />
            <input type="button" value="Print random number" onClick={this.handleClick} />
        </div> 
        )
    }
}

export default MyApps
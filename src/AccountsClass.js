import React, { useState, Component } from "react";


export default class AccountClass extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
        this.email = props.email
    }
    render() {
        return (
            <h1>This is the class component { this.props.name} </h1>
        );
    }
}



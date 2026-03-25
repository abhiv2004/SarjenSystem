import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return ( 
            <>
                <h1>This is my home.</h1>
            </>
         );
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return ( 
            <>
            <h1>Welcome to About Page.</h1>
            </>
         );
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return ( 
            <>
            <h1>Welcome to Contact Page.</h1>
            </>
         );
    }
}

export  { Home , About , Contact};
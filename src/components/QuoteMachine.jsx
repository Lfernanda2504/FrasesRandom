import React, { Component, Fragment } from 'react'



export default class QuoteMachine extends Component {
    constructor(){
        super();
        this.state = {
            quote:''
        }
        this.END_POINT ='https://www.mediawiki.org/wiki/API';
    }

    getRandomQuote = event => {
    console.log('clicking');
  }

    render() {
        console.log(this.state);
        return (
            <Fragment>
                <h1>Quote Machine</h1>
                <button onClick={this.getRandomQuote}>
                Da click aqui
                </button>
            </Fragment>
        )
    }
}



import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Track } from "../Track";
import { Form } from "../Form"; 



export class App extends Component {
state = {
  horses: [],
}
addNewHorse = (newhorses) => {
  this.setState(prevState =>({
    horses: prevState.horses.concat(newhorses)
  }));
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Kurtosys Grads</h2>
        </header>
        <div>
        <Form onSubmit = {this.addNewHorse}/>
        <Track jockeys = {this.state.horses} />
        </div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    );
  }
}
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Track } from "../Track";
import { Form } from "../Form";
 

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      horses: [],
      startRace: false,
    }
  }
  
//Add the racers into an array to place on the board
addNewHorse = (newhorses) => {
  this.setState(prevState =>({
      horses: prevState.horses.concat(newhorses)
  }));
}
//Click to start the game
handleClick = (event) => {
  event.preventDefault();
  if(this.state.horses.length <2)
  {
    alert('Please select two or more racers');
  }
  else{
    this.setState({
      startRace: true
  })
}
}
//Reset the board
handleReset = (event) => {
  event.preventDefault();
  this.setState({startRace: false, horses: []});
}
//Reset the board with the same horses that have already been selected
handleResetwithhorses = (event) => {
  event.preventDefault();
  this.setState({startRace: false});
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Kurtosys Grads</h2>
        </header>
        <div className = "Track">
        <Form onSubmit = {this.addNewHorse}/>
        <Track jockeys = {this.state.horses} raceState = {this.state.startRace}/>
        </div>
        <br></br>
        <div className = "buttons">
        <button className = "go" onClick = {this.handleClick}>Start</button>
        <button className = "reset" onClick = {this.handleReset}>Reset</button>
        <button className = "resetsamehorse" onClick = {this.handleResetwithhorses}>Reset with the same Racers</button>
        </div>
      </div>
    );
  }
}
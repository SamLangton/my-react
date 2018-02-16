import React, { Component } from 'react';
import data from '../../team.json';
import './Form.css';

export class Form extends Component {
    state = { userName: '',
              randomNum: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        for(var i = 0; i < data.length; i++)
        {
            var obj = data[i]
            if (obj.login === this.state.userName){
                this.props.onSubmit(obj);
            }
        }
        this.setState({ userName: ''}); 
    }
       
    handleRandomSubmit = (event) => {
        event.preventDefault();
        var list = [];
        for(var i = 0; i < this.state.randomNum; i++)
        {   var rand = Math.floor(Math.random() * data.length)
            var obj = data[rand]
            for(var j = 0; j <= list.length; j++)
            {
                if(list.length > 0 && obj.login === list[j-1])
                {
                    i--;
                }
                else
                {
                    this.props.onSubmit(obj);
                    list.push(obj.login);
                    break;
                    
                }
            }
            
        }
        this.setState({ randomNum: ''}); 
    }
    render() {
        return(
            <div>
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" value = {this.state.userName} 
                onChange = {(event) => this.setState({userName: event.target.value})}
                placeholder = 'Racer'
                required
                />
                <button type = "submit"> Add Player </button>
            </form>
            <form onSubmit = {this.handleRandomSubmit}>
            <input className = 'random' type = "text" value = {this.state.randomNum} 
            onChange = {(event) => this.setState({randomNum: event.target.value})}
            placeholder = 'Number of random Racers'
            required
            />
            <button type = "submit"> Add Players </button>
        </form>
        </div>
        );
    }
}

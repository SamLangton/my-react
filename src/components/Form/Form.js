import React, { Component } from 'react';
import axios from 'axios';

export class Form extends Component {
    state = { userName: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'https://api.github.com/users/' + this.state.userName;
        axios.get(url)
            .then(resp => {
                this.props.onSubmit(resp.data);
            });
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" value = {this.state.userName} 
                onChange = {(event) => this.setState({userName: event.target.value})}
                placeholder = 'Racer'
                />
                <button type = "submit"> Add Player </button>
            </form>
        );
    }
}
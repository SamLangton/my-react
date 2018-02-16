import React, {Component} from 'react';
import "./Horse.css";
import Progress from 'react-progressbar';



export class Horse extends Component {
    state = {
        speed: Math.floor(Math.random() * 100) + 50,
        progress: 0
    }
    interval = () => {
        if (this.state.progress > 99)
        { 
            this.setState({ progress: 100 }) ;
            alert("The winner is" + this.props.login);

        }
        else
        {
            this.setState(prevState =>({progress: prevState.progress + 0.4}));
        }
    }
    componentDidMount = () => {
     this.speed = setInterval(this.interval, this.state.speed); 
    }

    render(){
    return(
        <div className = "jockey">
            <img src = {this.props.avatar_url} alt = "avatar" />
            <div className = 'progress'>
            <div>{this.props.login}</div>
            <Progress completed = {this.state.progress}/>
            </div>
            </div>
    );
};
}
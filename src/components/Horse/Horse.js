import React, {Component} from 'react';
import "./Horse.css";
import Progress from 'react-progressbar';



export class Horse extends Component {
    state = {
        speed: Math.floor(Math.random() * 100),
        progress: 0
    }
    interval = () => {
        if (this.state.progress > 99)
        { 
            this.setState({ progress: 100 }) ;
        }
        else
        {
            this.setState(prevState =>({progress: prevState.progress + 0.2}));
        }
    }
    componentDidMount = () => {
     this.speed = setInterval(this.interval, this.state.speed); 
    }
    render(){
       
    return(
        <div className = "jockey" style = {{display: 'block'}}>
            <img src = {this.props.avatar_url} alt = "avatar" />
            <div>{this.props.name}</div>
            <Progress completed = {this.state.progress}/>
        </div>
    );
};
}
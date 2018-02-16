import React from 'react';
import "./List.css"

export const List = (props) => {
    return(
        <div className = "listOfJockeys">
        <div>{props.login}</div>
        </div>
    );
}
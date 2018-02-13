import React from 'react';
import { Horse } from "../Horse";

export const Track = (props) => {
    return(
        <div className = 'jockeys'>
            {props.jockeys.map(jockey => <Horse {...jockey} />)}
        </div>
    );
    
};



import React from "react";
import "./Track.css";
import { Horse } from "../Horse";
import { List } from "../List";

export const Track = (props) => {
    //If the start button has been pressed.
    if (props.raceState) {
      return (
        <div className="jockeys">
        {/* Put each of the racers on their own Horse*/}
          {props.jockeys.map(jockey => (
            <Horse {...jockey} />
          ))}
        </div>
      );
      //If the game hasn't started yet
    } else {
      return (
        <div>
          <div />
          <div> Chosen Racers </div>
          <div className="list">
          {/* Show all the Racers that have been selected */}
            {props.jockeys.map(jockey => <List {...jockey} />)}
          </div>
          <div className="start">Press Start To Race </div>
        </div>
      );
    }
  }

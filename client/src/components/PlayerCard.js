import React from "react";
import { Card, Feed } from "semantic-ui-react";

const PlayerCard = props => (
  <Card>
    <Card.Content>
      <h2>{props.players.name}</h2>
    </Card.Content>
    <Card.Content>
      {/* {console.log("Players", props)} */}
      <Feed>
        <Feed.Event>
          Searches: <h4> {props.players.searches}</h4>
        </Feed.Event>
        Country: <h4> {props.players.country}</h4>
      </Feed>
    </Card.Content>
  </Card>
);

export default PlayerCard;

// basically here i used semantic ui to create cards for the players i was importing from the API, this componenet is taking props in from the app.js top componenet and  is being accessed with props.players

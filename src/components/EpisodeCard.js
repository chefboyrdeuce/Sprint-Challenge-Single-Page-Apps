import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (

    <div>
      <Card style={{width:"200px"} ,{height:"100px"}} centered>  {/* <--reactstrap */}
      <Card.Header>{props.episode.name}</Card.Header> 
      <Card.Meta>Episode#: {props.episode.episode}</Card.Meta> 
      <Card.Meta>{props.episode.air_date}</Card.Meta> 
      <Card.Content extra>
        <a>{props.episode.characters.length} Characters</a>
      </Card.Content> 
      </Card>
    </div>
  );
}

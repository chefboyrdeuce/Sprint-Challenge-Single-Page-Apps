import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  console.log(props);
  // return <span></span>;

  return(
    <div>
      <Card style={{width:"400px"} ,{height:"400px"}} centered>  {/* <--reactstrap */}
      <img src = {props.character.image}  />
      <Card.Header>{props.character.name}</Card.Header> 
      <Card.Meta>{props.character.species}, {props.character.status}</Card.Meta> 
      <Card.Description>{props.character.location.name}</Card.Description> 
       </Card>
      


    </div>
  );
}

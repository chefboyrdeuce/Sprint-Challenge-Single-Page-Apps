import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard(props) {
  // console.log(location.name);
  return(

    <div>
      <Card style={{width:"200px"} ,{height:"100px"}} centered>  {/* <--reactstrap */}
      <Card.Header>{props.location.name}</Card.Header> 
      <Card.Meta>{props.location.type}</Card.Meta> 
      <Card.Meta>{props.location.dimension}</Card.Meta> 
      <Card.Content extra>
        <a>{props.location.residents.length} Residents</a>
      </Card.Content> 
      </Card>
    </div>
  );
}

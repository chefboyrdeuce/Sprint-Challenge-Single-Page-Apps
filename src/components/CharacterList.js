import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Card, Icon, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  
  const url =  "https://rickandmortyapi.com/api/character";

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get(url)
    .then((response) => {
        console.log(response.data.results)
        setCharacterList(response.data.results)      
        console.log(characterList)
    })
    .catch((error) => 
      error.response.data.error.message,
    )
  
  },[]);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characterList.map(character => <CharacterCard character={character}/> )}
    </section>
  );
}

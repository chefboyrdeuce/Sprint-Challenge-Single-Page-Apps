import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  
  // console.log('CharacterList.js is console.log');
  
  // const [data, setData] = useState(null);
  const url =  "https://rickandmortyapi.com/api/character";

  const [characterList, setCharacterList] = useState({    
    id: "",
    name: "",
    status: "",
    species: "",
    error: "Request was unsuccesful"
  });

  useEffect((props) => {
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
      // console.log('Network request was unsuccesful'),
    )
  
  },[]);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}

      <h2>A List of Characters</h2>

    </section>
  );
}

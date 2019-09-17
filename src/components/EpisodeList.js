import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";
import { Card, Icon, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EpisodeList(props) {

    const url =  "https://rickandmortyapi.com/api/episode";

    const [episodeList, setEpisodeList] = useState([]);
  
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      
      axios.get(url)
      .then((response) => {
          console.log(response.data.results)
          setEpisodeList(response.data.results)      
          console.log(episodeList)
      })
      .catch((error) => 
        error.response.data.error.message,
      )
    
    },[]);
  
    return (
      <section className="episode-list grid-view">
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {episodeList.map(episode => <EpisodeCard episode={episode}/> )}
      </section>
    );









}

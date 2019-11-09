import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";
import { Card, Icon, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LocationList(props) {

const url =  "https://rickandmortyapi.com/api/location";

const [locationList, setLocationList] = useState([]);

useEffect(() => {
// TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

axios.get(url)
.then((response) => {
    console.log(response.data.results)
    setLocationList(response.data.results)      
    console.log(locationList)
})
.catch((error) => 
    error.response.data.error.message,
    // console.log('Network request was unsuccesful'),
)

},[]);

return (
<section className="location-list grid-view">
    {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    {locationList.map(location => <LocationCard location={location}/> )}
</section>
);

}



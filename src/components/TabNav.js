import React, { useState } from "react";
import { Tab, Menu, Icon, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationList from  "./LocationsList";


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

function Link(props) {
    const handleItemClick = e => {
      e.preventDefault();
      props.history.push(props.to);
    };

}

export default function TabNav(props) {

const [activeItem, setActiveItem] = useState('Home Page');

const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });



return(
    <div>
        <nav>
            <Menu tabular>
            <Menu.Item name='Home Page' active={activeItem === 'Home Page'} as={NavLink} exact to="/" onClick={handleItemClick}> <Icon name='home' size='mini' />Home Page</Menu.Item> 
            <Menu.Item name='Characters' active={activeItem === 'Characters'} as={NavLink} exact to="/CharacterList" onClick={handleItemClick}> <Icon name='users' size='mini' />Characters</Menu.Item> 
            <Menu.Item name='Locations' active={activeItem === 'Locations'} as={NavLink} exact to="/LocationList" onClick={handleItemClick}> <Icon name='map' size='mini' />Locations</Menu.Item> 
            <Menu.Item name='Episodes' active={activeItem === 'Episodes'} as={NavLink} exact to="/EpisodeList" onClick={handleItemClick}> <Icon name='film' size='mini' />Episodes</Menu.Item> 
            </Menu>
        </nav>
    </div>  
)
};

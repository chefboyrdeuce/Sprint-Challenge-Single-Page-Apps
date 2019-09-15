import React, { useState } from "react";
import { Tab, Menu, Icon, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


export default function TabNav() {

    const [activeItem, setActiveItem] = useState('Home Page');

    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

    return(
        <div>
            <Menu tabular>
            <Menu.Item name='Home Page' active={activeItem === 'Home Page'} as={NavLink} exact to="/" onClick={handleItemClick}> <Icon name='home' size='mini' />Home Page</Menu.Item> 
            <Menu.Item name='Characters' active={activeItem === 'Characters'} as={NavLink} exact to="/characters" onClick={handleItemClick}> <Icon name='users' size='mini' />Characters</Menu.Item> 
            <Menu.Item name='Locations' active={activeItem === 'Locations'} as={NavLink} exact to="/locations" onClick={handleItemClick}> <Icon name='map' size='mini' />Locations</Menu.Item> 
            <Menu.Item name='Episodes' active={activeItem === 'Episodes'} as={NavLink} exact to="/episodes" onClick={handleItemClick}> <Icon name='film' size='mini' />Episodes</Menu.Item> 
            </Menu>

        </div>  
    )
};

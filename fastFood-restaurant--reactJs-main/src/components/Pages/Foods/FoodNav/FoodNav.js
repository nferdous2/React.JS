import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './FoodNav.css'

const FoodNav = () => {
    const selected = {
        fontWeight: "bold",
        color: "red",
        borderBottom: "3px solid red"
    }

    return (
        <div className="foodNav my-5">
            <NavLink to="/breakfast#breakfast" activeStyle={selected}>Breakfast</NavLink>
            <NavLink to="/lunch#lunch" activeStyle={selected}>Lunch</NavLink>
            <NavLink to="/dinner#dinner" activeStyle={selected}>Dinner</NavLink>
        </div>
    );
};

export default FoodNav;
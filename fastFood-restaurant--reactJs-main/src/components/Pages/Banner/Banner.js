import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner d-flex flex-column justify-content-center" >
            <h1>Best food waiting for your belly</h1>
            <div >
                <input className="input-field" placeholder="Search food item" type="text" />
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
};

export default Banner;
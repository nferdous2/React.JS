import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Foods from '../Foods/AllFood/Foods';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <About></About>
        </div>
    );
};

export default Home;
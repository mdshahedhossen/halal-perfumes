import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OurFactory from '../OurFactory/OurFactory';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            <OurFactory></OurFactory>
        </div>
    );
};

export default Home;
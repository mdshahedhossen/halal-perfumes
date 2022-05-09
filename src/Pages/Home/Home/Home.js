import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Items from '../Items/Items';
import OurFactory from '../OurFactory/OurFactory';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            <OurFactory></OurFactory>
            {/* <Counter></Counter> */}
        </div>
    );
};

export default Home;
import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            {/* <Counter></Counter> */}
        </div>
    );
};

export default Home;
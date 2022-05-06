import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Items></Items>
            {/* <Counter></Counter> */}
        </div>
    );
};

export default Home;
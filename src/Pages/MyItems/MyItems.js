import React, { useEffect, useState } from 'react';
import useMyitems from '../hooks/useMyitems';
import MyItem from '../MyItem/MyItem'

const MyItems = () => {
    const[myItems,setMyItems]=useMyitems()
    
    return (
        <div className='item'>
        <h1 className='title'>Our PerFumes Items</h1>
       <div className='item-container'>
       {
           myItems.map(myItem=><MyItem
           key={myItem._id}
            myItem={myItem}
           ></MyItem>)
        }
       </div>
    </div>
    );
};

export default MyItems;
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='item' id='item'>
            <h1 className='title'>Our Perpumes Items</h1>
           <div className='item-container'>
           {
                items.map(item=><Item
                key={item._id}
                item={item}
                ></Item>)
            }
           </div>
        </div>
    );
};

export default Items;
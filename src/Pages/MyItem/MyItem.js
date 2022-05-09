import React, { useState } from 'react';
import useMyitems from '../hooks/useMyitems';

const MyItem = ({myItem}) => {
    const{_id,img,name,price,quantity,description,supplier}=myItem
    const[myItems,setMyItems]=useMyitems()
    
    const handleDlete=(id)=>{
        const proceed=window.confirm('Are You Sure?')
    if(proceed){
      const url=`http://localhost:5000/myItems/${id}`
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        const remaining=myItems.filter(item=>item._id!==id)
        setMyItems(remaining)
      })
    }
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item_descrive'>
            <h2 className='name-title'>{name}</h2>
            <p className='price'>{price}৳/-</p>
            <p>Quantity= <span className='text-danger'>{quantity}</span></p>
            <p><small>{description}</small></p>
            <p><small>Supplier= {supplier}</small></p>
            <button className='btn btn-outline-success' onClick={()=>handleDlete(_id)}>Delete</button>
            </div>

        </div>
    );
};

export default MyItem;
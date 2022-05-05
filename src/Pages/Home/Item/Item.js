import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const{_id,img,name,price,description}=item
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2 className='name-title'>{name}</h2>
            <p className='price'>{price}৳/=</p>
            <p><small>{description}</small></p>
            <button className='btn btn-outline-success'>{name}</button>

        </div>
    );
};

export default Item;
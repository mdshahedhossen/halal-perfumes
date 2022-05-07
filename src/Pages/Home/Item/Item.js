import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const{_id,img,name,price,quantity,description,supplier}=item
    const navigate=useNavigate()
    const navigateToUpdate=(id)=>{
        navigate(`/item/${id}`)

    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item_descrive'>
            <h2 className='name-title'>{name}</h2>
            <p className='price'>{price}৳/=</p>
            <p>Quantity= <span className='text-danger'>{quantity}</span></p>
            <p><small>{description}</small></p>
            <p><small>Supplier= {supplier}</small></p>
            <button className='btn btn-outline-success' onClick={()=>navigateToUpdate(_id)}>Update {name}</button>
            </div>

        </div>
    );
};

export default Item;
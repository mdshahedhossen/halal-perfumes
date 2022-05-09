import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {useParams } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const { _id, img, name, price, quantity, description, supplier } = itemDetails;
  useEffect(() => {
    const url = `https://warm-wildwood-52542.herokuapp.com/items/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemDetails(data));
  }, [itemDetails]);

  const handleUpdateStock=e=>{
    e.preventDefault()
        const quantity = parseInt(e.target.quantity.value) + parseInt(itemDetails.quantity)
        const updatePerfumes = { quantity }

        const url=`https://warm-wildwood-52542.herokuapp.com/items/${itemId}`
        fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatePerfumes)

      })
          .then(res => res.json())
          .then(result => {
              console.log("success", result);
              alert('Quantity Update Successful');
              e.target.reset();
          })
  }
  const handleDeliver = id => {
    const quantityUpdate = itemDetails?.quantity
    const updateQuantity = { quantityUpdate }
    fetch(`https://warm-wildwood-52542.herokuapp.com/items/deliver/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateQuantity)
    })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
        })
}

  
  return (
    <div >
        <Card className="mx-auto mt-3 mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <p>ID: {_id}</p>
        <p className='price'>{price}৳/=</p>
        <p>Sold= <span className='text-danger'>{quantity}</span></p>
        <p><small>{description}</small></p>
        <p><small>Supplier= {supplier}</small></p>
        </Card.Text>
        {
          itemDetails.quantity === 0 ?
         <button className='btn-danger border-0 text-white p-2'>sold out</button>
              :
           <button onClick={() => handleDeliver(itemId)} className='border-0 p-2 btn-dark'>Delivered</button>
         }
      </Card.Body>   
    </Card>

    <div className="restock-form">
    <h4 className="text-danger text-center">Restock Item...</h4>
      <form onSubmit={handleUpdateStock}>
        <input type="number" name="quantity" placeholder="Restock Item Quantity" id="" />
        <input type="submit" value="Add Quantity" />
      </form>
    </div>
    
    </div>
  );
};

export default ItemDetails;

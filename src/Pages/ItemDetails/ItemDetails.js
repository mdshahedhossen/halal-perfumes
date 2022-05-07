import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {useParams } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const { _id, img, name, price, quantity, description, supplier } = itemDetails;
  useEffect(() => {
    const url = `http://localhost:5000/items/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemDetails(data));
  }, []);
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
        <button className="btn btn-primary">Delivered</button>
        <h4 className="text-danger">Restock Item...</h4>
        <input  type="text" name="text" id="" />
        <button className="btn btn-outline-success">Submit</button>

      </Card.Body>
      
    </Card>
    
    
    </div>
  );
};

export default ItemDetails;

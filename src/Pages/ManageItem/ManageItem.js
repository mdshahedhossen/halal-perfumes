import React from "react";
import { Table } from "react-bootstrap";
import useItems from "../hooks/useItems";
import './MnageItem.css'

const ManageItem = ({ item }) => {
  const { _id, name, price, quantity } = item;
  const [items,setItems]=useItems()
  // console.log(items)

  const handleDelete=(id)=>{
    const proceed=window.confirm('Are You Sure?')
    if(proceed){
      const url=`https://warm-wildwood-52542.herokuapp.com/items/${id}`
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        const remaining=items.filter(item=>item._id!==id)
        setItems(remaining)
      })
    }
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Producr Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Sold Out</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td><button className="delete-btn" onClick={()=>handleDelete(_id)}>Delete Item</button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ManageItem;

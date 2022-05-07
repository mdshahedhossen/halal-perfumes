import React from "react";
import { Table } from "react-bootstrap";
import useItems from "../hooks/useItems";

const ManageItem = ({ item }) => {
  const { _id, name, price, quantity } = item;
  const [items,setItems]=useItems()
  const handleDelete=(id)=>{
    const proceed=window.confirm('Are You Sure?')
    if(proceed){
      const url=`http://localhost:5000/items/${id}`
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
          <td onClick={()=>handleDelete(_id)}>X</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ManageItem;

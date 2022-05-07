import React from "react";
import { Table } from "react-bootstrap";

const ManageItem = ({ item }) => {
  const { _id, name, price, quantity } = item;
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
          <td>X</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ManageItem;

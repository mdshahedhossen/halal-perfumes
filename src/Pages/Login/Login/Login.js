import React from "react";
import { Button, Form } from "react-bootstrap";
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
        <h3 className="text-center">Please Login...</h3>
      <Form className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn-login" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

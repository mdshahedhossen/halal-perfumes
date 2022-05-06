import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef=useRef('')
    const emailRef=useRef('')
    const passRef=useRef('')
    const navigate=useNavigate('')

    const handleOnRegister=e=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passRef.current.value;
        // console.log(name,email,password)
        createUserWithEmailAndPassword(email, password)
    } 

    const navigateLogin=(e)=>{
        navigate('/login')
    }
    if(user){
        navigate('/login')
    }

  return (
    <div className="register-container">
      <h3 className="text-center">Please Register...</h3>
      <Form onSubmit={handleOnRegister} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn-register" type="submit">
          Registation
        </Button>
      </Form>
      <p className="new-user">
        Already Register? <Link onClick={navigateLogin} className="from-link" to='/Login'>Login</Link>
    </p>
    </div>
  );
};

export default Register;

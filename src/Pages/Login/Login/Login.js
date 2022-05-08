import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import SociaLogin from "../SociaLogin/SociaLogin";
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef=useRef('')
    const passRef=useRef('')
    const navigate=useNavigate()

    const handleOnSubmit=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email,password)
    } 

    const navigateRegister=(e)=>{
        navigate('/register')
    }
    if(user){
        navigate('/home')
    }
    let errorElement;
    if(error){
        errorElement=<p>Sorry!! User no found!!</p>
    }

    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
          await sendPasswordResetEmail(email);
          toast('Sent email');
      }
      else{
          toast('please enter your email address');
      }
  }


  return (
    <div className="login-container">
        <h3 className="text-center">Please Login...</h3>
      <Form onSubmit={handleOnSubmit} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn-login" type="submit">
          Login
        </Button>
      </Form>
      <p className="new-user">
        Forget Password? <button onClick={resetPassword} className="text-primary p-auto">Reset password</button>
    </p>
      <SociaLogin></SociaLogin>
      <ToastContainer />
      <p className="text-center text-danger">{errorElement}</p>
      <p className="new-user">New User? <span onClick={navigateRegister} className="register">Please Register...</span></p>
    </div>
  );
};

export default Login;

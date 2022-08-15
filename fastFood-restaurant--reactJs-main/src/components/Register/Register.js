import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';



initializeAuthentication()
const auth = getAuth();

const Register = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


            })
            .catch((error) => {

            });
    }


    return (
        <div className="login-form">

            <div className="my-cart">
                <h2>Please Register</h2>

                <form onSubmit={handleSignUp}>

                    <input onBlur={handleEmail} type="email" placeholder="Enter your email" />
                    <br />
                    <input onBlur={handlePassword} type="password" placeholder="Enter password" /><br />
                    <input className="login-btn" type="submit" value="Register" /><br />
                </form>
                <span>I have an account <Link to="/login">Login</Link></span><br />


            </div>
        </div>
    );
};

export default Register;
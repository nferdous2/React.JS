import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';




initializeAuthentication()
const auth = getAuth();



const Login = () => {
    const { signInWithGoogle } = useAuth()
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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <div className="login-form">

            <div className="my-cart">
                <h2>Please login</h2>

                <form onSubmit={handleSignUp}>

                    <input onBlur={handleEmail} type="email" placeholder="Enter your email" />
                    <br />
                    <input onBlur={handlePassword} type="password" placeholder="Enter password" /><br />
                    <input className="login-btn" type="submit" value="Register" /><br />
                </form>
                <Link to="/">Forgot password</Link><br />
                <span>Create a new account <Link to="/register">Register</Link></span><br />
                <p >----- Or login -----</p>
                <button className="online-btn google" onClick={signInWithGoogle}><i class="fab fa-google"></i> Google</button>
                <button className="online-btn facebook" onClick={signInWithGoogle}><i class="fab fa-facebook"></i> Facebook</button>
                <button className="online-btn twitter" onClick={signInWithGoogle}><i class="fab fa-twitter"></i> Twitter</button>
                <button className="online-btn github" onClick={signInWithGoogle}><i class="fab fa-github"></i> Github</button>
            </div>
        </div>
    );
};

export default Login;
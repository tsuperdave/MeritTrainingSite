import React, { useContext, useState } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithRedirect } from "firebase/auth";

export default function LogInForm() {

    const [auth, setAuth] = useContext(AuthorizationContext);

    const googleLogin = async e => {
        e.preventDefault();
        
        
        const res = await signInWithRedirect(auth, googleProvider)
        .then((res) => {
            // const cred = googleProvider.credentialFromResult(res);
            // console.log(cred);

        })
        .catch((e) => {
            console.log(e);
        })
    
        
    };

    return (
        <>
            
            <form>
                    <div className="loginForm">
                        <h3>Please Sign In</h3>
                        <input type="email" className="emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />

                        <input type="password" className="passInput" id="exampleInputPassword1" placeholder="Password" />

                        <div className="checkbox">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="rememberme" htmlFor="exampleCheck1">   Remember Me</label>
                        </div>

                        <button type="submit" className="btn-login">Log In</button>
                        <button type="submit" className="btn-login-google" onClick={googleLogin}>Log In With Google</button>                    
                    </div>
            </form>            
            
        </>
    );
}




import React from 'react';
import './index.css';
import { auth, googleProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const LogInForm = () => {

    const googleLogin = async e => {
        // e.preventDefault();
        
        try {
            const res = await auth.signInWithPopup(googleProvider); 
        } catch(err) {
            console.log(err);
        }     
        
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

                        <button type="submit" className="btn-login">Submit</button>
                        <button type="submit" className="btn-login-google" onClick={googleLogin}>Log In With Google</button>                    
                    </div>
            </form>            
            
        </>
    );
}

export default LogInForm;



import React, { useContext } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithRedirect, onAuthStateChanged, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { Redirect, useHistory } from 'react-router';


export default function LogInForm() {

    const [user, setUser] = useContext(AuthorizationContext);
    const history = useHistory();
    

    const login = e => {
        e.preventDefault();
        
        signInWithPopup(fbAuth, googleProvider)
        .then((res) => {
            const token = res.credential.accessToken;
            const user = res.user;
            console.log(res);
            console.log(token);
            console.log(user);
        })
        .catch((e) => {
            console.log(e);
        });
        
        fbAuth.onAuthStateChanged((user) => {
            if(user) {
                console.log("User signed in");
                console.log(user);
            } else {
                console.log("No User");
            }
            
        });
          
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

                        <button type="submit" className="btn-login" onClick={login}>Log In</button>
                        {/* <button type="submit" className="btn-login-google">Log In With Google</button>                     */}
                    </div>
            </form>            
            
        </>
    );
}




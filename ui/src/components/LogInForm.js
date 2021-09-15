import React, { useContext, useRef, useState } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router';


export default function LogInForm() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [user, setUser] = useContext(AuthorizationContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 
    const history = useHistory();

    const login = async e => {
        e.preventDefault();

        signInWithEmailAndPassword(fbAuth, emailRef, passwordRef)
        .then((userCred) => {
            console.log(userCred);
        })
        .catch((e) => {
            console.log(e.code);
            console.log(e.message);
        })

        // onAuthStateChanged(fbAuth, (user) => {
        //     if(user) {
        //         console.log(user.uid)
        //     } else {
        //         console.log("not logged in");
        //     }
        // })
    }
    

    const googleLogin = e => {
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
                        <input type="email" className="emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" ref={emailRef}/>

                        <input type="password" className="passInput" id="exampleInputPassword1" placeholder="Password" ref={passwordRef}/>

                        <div className="checkbox">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="rememberme" htmlFor="exampleCheck1">   Remember Me</label>
                        </div>

                        <button type="submit" className="btn-login" onClick={login}>Log In</button>
                        <button type="submit" className="btn-login-google" onClick={googleLogin}>Log In With Google</button>                    
                    </div>
            </form>            
            
        </>
    );
}




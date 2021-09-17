import React, { useContext, useRef, useState } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router';


export default function LogInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useContext(AuthorizationContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(fbAuth, email, password)
        .then((userCredential) => {
            const u = userCredential.user;
            
            console.log("User info: " + u);
        })
        .catch((error) => {
            console.log(e.code);
            console.log(e.message);
        })

        // onAuthStateChanged(fbAuth, (user) => {
        //     if(user) {
        //         console.log(user)
        //     } else {
        //         console.log("not logged in");
        //     }
        // })
        console.log("User logged in")

        
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
        
        onAuthStateChanged(fbAuth, (user) => {
            if(user) {
                console.log(user);
            } else {
                console.log("No User");
            }
            
        });
          
    };

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                    <div className="loginForm">
                        <h3>Please Sign In</h3>
                            
                        <input type="email" className="emailInput" aria-describedby="emailHelp" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>   
                        <input type="password" className="passInput" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

                        <div className="checkbox">
                            <input type="checkbox" className="form-check-input"/>
                            <label className="rememberme" htmlFor="exampleCheck1">   Remember Me</label>
                        </div>

                        <button type="submit" className="btn-login">Log In</button>
                                            
                    </div>
            </form>

            <button className="btn-login-google" onClick={googleLogin}>Log In With Google</button>            
            
        </>
    );
}




import React, { useContext, useState } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Redirect } from 'react-router';


export default function LogInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useContext(AuthorizationContext);
    // const [loading, setLoading] = useState(false); 

    const handleSubmit = async e => {
        e.preventDefault();

        await signInWithEmailAndPassword(fbAuth, email, password)
        .then((userCredential) => {
            const u = userCredential.user;

            // console.dir(u)
            // console.log("UID: " + u.uid);
            // console.log("token: " + u.stsTokenManager.accessToken);
            // console.log("email: " + u.email);
            // console.log("displayName: " + u.displayName);
            // console.log("phone: " + u.phoneNumber);
            // console.log("photoURL: " + u.providerData[0].photoURL)

            //setUser
            setUser({
                uid: u.uid,
                token: u.stsTokenManager.accessToken,
                email: u.email,
                displayName: 'Site Admin',
                phoneNumber: '1234567890',
                photoURL: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/983/original/merit-20america-20logo.jpg',
                isLoggedIn: true
            }); 
            
            
            
        })
        .catch((error) => {
            switch(error) {
                case error.code === "auth/user-not-found":
                    alert("Wrong Email");
                    break;
                case error.code === 'auth/wrong-password':
                    alert("Wrong Password");
                    break;
                default:
                    console.log(error.message);    
            }
        })    

        reRoute();

        // onAuthStateChanged(fbAuth, (u) => {
        //     if(u) {
        //         console.dir(u);
        //     } else {
        //         console.log("Not logged in");
        //     }
        // })
        
    };
    
    // Add some routing post log in
    const reRoute = () => {
        if(user.isLoggedIn) {
            console.log("reroute reached");
            return <Redirect to='/alumni' />
        }       
    }

    console.log("User logged in after sign in: " + user.isLoggedIn)
    reRoute();

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




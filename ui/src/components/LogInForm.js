import React, { useContext, useState } from 'react';
import './index.css';
import { AuthorizationContext } from '../auth'
import { fbAuth, googleProvider } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { history } from '../customRouter';


export default function LogInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useContext(AuthorizationContext);
    // const [loading, setLoading] = useState(false); 

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(fbAuth, email, password)
        .then((userCredential) => {
            const u = userCredential.user;

            //setUser
            setUser({
                uid: u.uid,
                token: u.stsTokenManager.accessToken,
                email: u.email,
                displayName: 'Site Admin',
                phoneNumber: '1234567890',
                photoURL: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/983/original/merit-20america-20logo.jpg',
                role: 'admin',
                isLoggedIn: true
            });
            

            // after log in, redirect based on role
            loginRedirect(user.role);
               
            
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

              
    };
    
    // Add some routing post log in
    const loginRedirect = (role) => {
        // add switch case based on role 
        console.log("Redirect on role")
        history.push('/alumni');     
    }

    const googleLogin = e => {
        e.preventDefault();
        
        signInWithPopup(fbAuth, googleProvider)
        .then((res) => {
            const u = res.user;
            console.dir(res)
            //setUser
            setUser({
                uid: u.uid,
                token: u.accessToken,
                email: u.email,
                displayName: u.displayName,
                phoneNumber: u.phoneNumber,
                photoURL: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/983/original/merit-20america-20logo.jpg',
                role: 'admin',
                isLoggedIn: true
            });  
                  

            // after log in, redirect based on role
            loginRedirect(user.role);
        })
        .catch((e) => {
            console.log(e);
        });
        
        console.log("Google Log In");
          
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




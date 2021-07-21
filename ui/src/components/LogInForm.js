import React from 'react';
import './index.css';

export default function LogInForm() {
    return (
        <>
            
            <form>
                    <div className="loginForm">
                        <h3>Please Sign In</h3>
                        <input type="email" className="emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        <input type="password" className="passInput" id="exampleInputPassword1" placeholder="Password" />

                        <div className="checkbox">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="rememberme" htmlFor="exampleCheck1">   Remember Me</label>
                        </div>

                        <button type="submit" className="btn-login">Submit</button>
                        
                    </div>
            </form>            
            
        </>
    );
}



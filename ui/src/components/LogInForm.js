import React from 'react';
import './index.css';
import { Button, Form } from 'react-bootstrap';
import './index.css';


export default function LogInForm() {
    return (
        <>
            <Form className='loginForm'>
                <Form.Group className="emailInput" controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>
                <Form.Group className="passInput" controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Check className='rememberme' type="checkbox" label="Remember Me" />                             
            </Form>

            <>
            <style type='text/css'>
                {`
                    .btn-login {
                        position: absolute;
                        width: 200px;
                        color: white;
                        background-color: #192F43;
                        align-items: center;
                        justify-content: center;
                        height: 39px;
                        left: calc(50% - 190px/2 + 1px);
                        top: calc(50% - 67px/2 + 126.5px);
                    }
                `}
            </style>

            <Button variant='login' type="submit">
                Log In
            </Button>
            </>
            
        </>
    );
}


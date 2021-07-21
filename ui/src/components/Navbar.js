import React from 'react';
import { Navbar } from 'react-bootstrap';
import './index.css';

export default function NavbarMain(props) {
    return (
        <>
            <Navbar fixed={props.fixed} expand={props.expand} bg={props.bg} variant={props.variant}>
                
                    <Navbar.Brand href='/login'>
                    <img 
                        className='d-inline-block align-top px-2'
                        src={props.logo}
                        alt='logo'
                        height='35'
                    />
                    </Navbar.Brand>
                                  
            </Navbar>
        </>
    );
}


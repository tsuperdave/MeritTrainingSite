import React from 'react';
import NavbarMain from '../components/Navbar';
import MAlogo from '../resources/MAlogo.png';

export default function LogInPage(props) {
    return (
        <>
            <NavbarMain                
                variant='dark'
                expand='lg'
                logo={MAlogo}
            />
        </>
    );  
}

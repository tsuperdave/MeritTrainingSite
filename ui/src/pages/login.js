import React from 'react';
// import { Image } from 'react-bootstrap';
import LogInBg from '../components/LogInBg';
import LogInForm from '../components/LogInForm';
import NavbarMain from '../components/Navbar';
import MAlogo from '../resources/MAlogo.png';
import './index.css'

export default function LogInPage(props) {

    return (
        <>
            <LogInBg /> 

            <NavbarMain 
                fixed='top'    
                variant='dark'
                expand='lg'
                logo={MAlogo}
            />
                    
            <LogInForm />
            
        </>   
    );  
}

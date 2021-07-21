import React from 'react';
import { Image } from 'react-bootstrap';
// import LogInBg from '../components/LogInBg';
import LogInForm from '../components/LogInForm';
import NavbarMain from '../components/Navbar';
import MAlogo from '../resources/MAlogo.png';
import './index.css'

export default function LogInPage(props) {

    return (
        <>
            <div className='bg-layer'>   
            <Image 
                className='bg'
                fluid                   
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" 
                
            />    
            </div>     
            {/* <LogInBg>     */}
                <NavbarMain 
                    fixed='top'    
                    variant='dark'
                    expand='lg'
                    logo={MAlogo}
                />
                    
                <LogInForm />
            {/* </LogInBg> */}
        </>   
    );  
}

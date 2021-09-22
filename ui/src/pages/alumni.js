import React from 'react'
import { requireAuth } from '../auth';
import NavbarMain from '../components/Navbar';
import MAlogo from '../resources/MAlogo.png';

const AlumniPage = (props) => {

    return(
        <>

            <NavbarMain 
                fixed='top'    
                variant='light'
                expand='md'
                logo={MAlogo}
            />
            
            <div>
                <h1>Alumni Page</h1>
            </div>
            
        </>
    );
}

export default requireAuth(AlumniPage);
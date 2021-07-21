import React from 'react'
import { Image } from 'react-bootstrap';

const LogInBg = (props) => {
    const imgURL = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80";

    return (
        <>
            <div className='bg-layer'>
                <Image 
                    className='bg' 
                    fluid  
                    src={imgURL}

                /> 
            </div>
        </>
    )
}

export default LogInBg

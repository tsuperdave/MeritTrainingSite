import React from 'react'
import { requireAuth } from '../auth';

const AlumniPage = (props) => {

    return(
        <>
            <h1>Alumni Page</h1>
        </>
    );
}

export default requireAuth(AlumniPage);
import React from 'react'
import { requireAuth } from '../auth';

const AdminDashboard = (props) => {
    return (
        <>
            <h1>Admin Page</h1>
        </>
    )
}

export default requireAuth(AdminDashboard);

import { checkUserRole } from '@/lib/auth/Auth'
import React from 'react'

const layout = ({admin, client} : {admin : React.ReactNode, client : React.ReactNode}) => {
    const { role } = checkUserRole();

    return(
        <>
            {role === "admin" ? admin : client}
        </>
    )
}

export default layout
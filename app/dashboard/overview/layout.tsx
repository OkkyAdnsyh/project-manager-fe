import ProfileBar from '@/components/modules/ProfileBar/ProfileBar';
import { checkUserRole } from '@/lib/auth/Auth'
import React from 'react'

const layout = ({admin, client} : {admin : React.ReactNode, client : React.ReactNode}) => {
    const { role, username } = checkUserRole();

    return(
        <>
            <ProfileBar props={{role : role as string, username : username}} />
            {role === "admin" ? admin : client}
        </>
    )
}

export default layout
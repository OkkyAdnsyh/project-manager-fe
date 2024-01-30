import Greeter from '@/components/elements/Greeter/Greeter';
import styles from '@/components/modules/ProfileBar/profilebar.module.scss';
import React from 'react'

interface IProfileProps {
    role : string,
    username : string
}

const ProfileBar = ({props, children} : {props : IProfileProps, children? : React.ReactNode}) => {

    const { role, username } = props;


    return (
    <>
        <header className={styles.container}> 
            <Greeter username={username}/>
            {children}
        </header>
    </>
  )
}

export default ProfileBar
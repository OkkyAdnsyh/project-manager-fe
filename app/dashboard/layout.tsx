import React from 'react';
import styles from '@/public/style/page.module.scss';
import Sidenav from '@/components/modules/Sidenav/Sidenav';
import { checkUserRole } from '@/lib/auth/Auth';
import Profile from '@/components/modules/Profile/Profile';

interface ILayoutProps {
  admin : React.ReactNode,
  client : React.ReactNode
}

const layout = ({admin, client} : ILayoutProps) => {

  const userRole = checkUserRole();

  return (
    <>
      <main className={styles.dashboard}>
        <Sidenav />
        <section className={styles.main}>
          <Profile props={{
            username : userRole.username
          }}/>
          {userRole.role === 'client' ? client : admin}
        </section>
      </main> 
    </>
  )
}

export default layout
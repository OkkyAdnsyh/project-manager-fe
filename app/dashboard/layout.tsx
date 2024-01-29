import React from 'react';
import styles from '@/public/style/page.module.scss';
import Sidenav from '@/components/modules/Sidenav/Sidenav';
import { checkUserRole } from '@/lib/auth/Auth';

interface ILayoutProps {
  admin : React.ReactNode,
  client : React.ReactNode
}

const layout = ({admin, client} : ILayoutProps) => {

  const userRole = checkUserRole();
  console.log(userRole)

  return (
    <>
      <main className={styles.dashboard}>
        <Sidenav />
        <section className={styles.main}>
          {userRole === 'client' ? client : admin}
        </section>
      </main> 
    </>
  )
}

export default layout
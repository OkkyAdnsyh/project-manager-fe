import React from 'react';
import styles from '@/public/style/page.module.scss';
import Sidenav from '@/components/modules/Sidenav/Sidenav';
import { checkUserRole } from '@/lib/auth/Auth';

const layout = ({children} : {children : React.ReactNode}) => {

  const userRole = checkUserRole();

  return (
    <>
      <main className={styles.dashboard}>
        <Sidenav />
        <section className={styles.main}>
          {children}
        </section>
      </main> 
    </>
  )
}

export default layout
import React from 'react';
import styles from '@/public/style/page.module.scss';
import Sidenav from '@/components/modules/Sidenav/Sidenav';

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <main className={styles.dashboard}>
        <aside className={styles.sidenav}>
          <Sidenav/>
        </aside>
        <section className={styles.main}>
          {children}
        </section>
      </main> 
    </>
  )
}

export default layout
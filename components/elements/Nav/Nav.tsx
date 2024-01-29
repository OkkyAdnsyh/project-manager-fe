
import React from 'react';
import styles from '@/components/elements/Nav/nav.module.scss';
import Link, { LinkProps } from 'next/link';

interface INav extends LinkProps{
  children? : React.ReactNode,
  className? : string,
  context? : string
}
const Nav = ({children, className, context, href, ...rest} : INav) => {

  return (
    <>
      <nav>
        <Link className={`${styles['nav-item']} ${styles[className as string]}`} href={`/dashboard/${href}`} {...rest}>
          {children}
          <p className={styles.context}>
            {context}
          </p>
        </Link>
      </nav>
    </>
  )
}

export default Nav
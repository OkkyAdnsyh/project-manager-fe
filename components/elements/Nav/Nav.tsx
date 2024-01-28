'use client';
import React from 'react';
import styles from '@/components/elements/Nav/nav.module.scss';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface INav extends LinkProps{
  children? : React.ReactNode,
  className? : string,
  context? : string
}
const Nav = ({children, className, context, href, ...rest} : INav) => {
  const path = usePathname();
  const currentPath = path.split('/');

  return (
    <>
      <nav>
        <Link className={`${styles['nav-item']} ${styles[className as string]}`} href={`/dashboard/${currentPath[2]}${href}`} {...rest}>
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
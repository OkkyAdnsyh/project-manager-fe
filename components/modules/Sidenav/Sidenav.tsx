'use client';

import React from 'react';
import styles from '@/components/modules/Sidenav/sidenav.module.scss';
import Nav from '@/components/elements/Nav/Nav';
import logo from '@/public/img/logo-green.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaProjectDiagram, FaFileInvoiceDollar } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { MdNote } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Sidenav = () => {
  const currentPath = usePathname();

  return (
    <>
      <aside className={styles['sidebar__container']}>
        <Link className={styles.logo} href={`/dashboard`}>    
          <Image src={logo} alt='logo' width={48} height={48} />
        </Link>
        <ul className={styles['nav-item__wrapper']}>
          <li className={`${styles['nav-item__container']} ${currentPath === "/dashboard" ? styles['isActive'] : ''}`}>
            <Nav href={'/'} context='Overview' className={currentPath === "/dashboard" ? 'isActive' : ''}>
              <FaHome style={{fontSize : 24}} />
            </Nav>
          </li>
          <li className={`${styles['nav-item__container']} ${currentPath === "/dashboard/project" ? styles['isActive'] : ''}`}>
            <Nav href={'/project'} context='Projects' className={currentPath === "/dashboard/project" ? 'isActive' : ''}>
              <FaProjectDiagram style={{fontSize : 24}} />
            </Nav>
          </li>
          <li className={`${styles['nav-item__container']} ${currentPath === "/dashboard/timeline" ? styles['isActive'] : ''}`}>
            <Nav href={'/timeline'} context='Timeline' className={currentPath === "/dashboard/timeline" ? 'isActive' : ''}>
              <FaTimeline style={{fontSize : 24}} />
            </Nav>
          </li>
          <li className={`${styles['nav-item__container']} ${currentPath === "/dashboard/quotation" ? styles['isActive'] : ''}`}>
            <Nav href={'/quotation'} context='Quotation' className={currentPath === "/dashboard/quotation" ? 'isActive' : ''}>
              <MdNote style={{fontSize : 24}} />
            </Nav>
          </li>
          <li className={`${styles['nav-item__container']} ${currentPath === "/dashboard/invoice" ? styles['isActive'] : ''}`} >
            <Nav href={'/invoice'} context='Invoice' className={currentPath === "/dashboard/invoice" ? 'isActive' : ''}>
              <FaFileInvoiceDollar style={{fontSize : 24}} />
            </Nav>
          </li>
        </ul>
      </aside>
    </>
    // <nav className={`${styles.container}`}>

    //   <ul>        
    //     <li>
    //       <Nav href={`${path}/`}>
    //         <FaHome style={{color : '#F3F3F3', fontSize : 20}} />
    //         <p>Overview</p>
    //       </Nav>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Sidenav
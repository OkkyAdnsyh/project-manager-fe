import React, { HTMLProps } from 'react';
import styles from '@/components/elements/Button/button.module.scss';

interface IBtnProps extends HTMLProps<HTMLButtonElement>{
    children : React.ReactNode,
    btnType : string,
    classGroup? : Array<string>
}

const Button = ({children, className, classGroup, btnType, onClick} : IBtnProps) => {
  return (
    <>
        {btnType === 'button' && 
            <button type="button" className={className} onClick={onClick}>
                {children}
            </button>
        }
        {btnType === 'submit' &&
            <button 
            type="submit" 
            className={`${styles["submit-btn"]} ${classGroup?.map((name) => {return styles[name]}).join(" ")}`} 
            onClick={onClick}>
                <div className={styles["enable-background"]}></div>
                <div className={styles.content}>
                    {children}
                </div>
            </button>
        }
        {btnType === 'reset' &&
            <button 
            type="reset" 
            className={`${styles["reset-btn"]} ${classGroup?.map((name) => {return styles[name]}).join(" ")}`} 
            onClick={onClick}>
                {children}
            </button>
        }
    </>
  )
}

export default Button
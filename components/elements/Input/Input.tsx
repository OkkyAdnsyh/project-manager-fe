'use client'

import React, { HTMLProps, MouseEvent, useState } from 'react';
import styles from '@/components/elements/Input/input-global.module.scss';
import Button from '@/components/elements/Button/Button';
import * as MD from 'react-icons/md';
import * as FA from 'react-icons/fa';
import { IoTextSharp } from 'react-icons/io5';

interface IInputProps extends HTMLProps<HTMLInputElement>{
    inputType : string,
    label : string,
    containerStyle? : string,
    inputStyle? : string
}

const Input : React.FC<IInputProps> = ({inputType, label, name, onChange, containerStyle, inputStyle, ...rest}) => {
    
    const [isFocus, setFocus] = useState<boolean>(false);
    const [isReveal, setReveal] = useState<boolean>(false);

    const invalidRegex = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g

    const handlePassReveal : (e : MouseEvent<HTMLButtonElement>) => void = (e) => {
        setReveal(!isReveal);
    };
    
    return(
        <>
            <div className={`${styles['input-container']}`}>
                {inputType === "email" &&
                    <div className={`${styles.input} ${isFocus && styles.isActive} ${styles[inputStyle as string]}`}>
                        <MD.MdOutlineAlternateEmail style={{color : '#F3F3F3', fontSize : 16}} />
                        <label htmlFor={name} id={`${name}-label`}>{label}</label>
                        <input 
                            type={inputType} 
                            name={name}
                            id={name}
                            onFocus={() => {
                                {isFocus ? '' : setFocus(!isFocus)}
                            }}
                            onBlur={(e) => {
                                {!e.target.value && isFocus ? setFocus(!isFocus) : ''};
                            }}
                            onChange={onChange}
                            {...rest}
                            />
                    </div> 
                }
                {inputType === "password" &&
                    <div className={`${styles.input} ${isFocus && styles.isActive} ${styles[inputStyle as string]}`}>
                        <MD.MdOutlineLock style={{color : '#F3F3F3', fontSize : 16}} />
                        <label htmlFor={name} id={`${name}-label`}>{label}</label>
                        <input 
                            type={!isReveal ? inputType : "text"} 
                            name={name}
                            id={name}
                            onFocus={() => {
                                {isFocus ? '' : setFocus(!isFocus)}
                            }}
                            onBlur={(e) => {
                                {!e.target.value && isFocus ? setFocus(!isFocus) : ''};
                            }}
                            onChange={onChange}
                            {...rest}
                            />
                        <Button className={styles['reveal-btn']} onClick={handlePassReveal} btnType="button">
                            {!isReveal ?
                                <FA.FaEye style={{color : '#F3F3F3', fontSize : 16}} />
                                :
                                <FA.FaEyeSlash style={{color : '#F3F3F3', fontSize : 16}} />
                            }
                        </Button>
                    </div>
                }
                {inputType === "text" &&
                    <div className={`${styles.input}  ${isFocus && styles.isActive} ${styles[inputStyle as string]}`}>
                        <IoTextSharp style={{color : '#F3F3F3', fontSize : 16}} />
                        <label htmlFor={name} id={`${name}-label`}>{label}</label>
                        <input 
                            type={!isReveal ? inputType : "text"} 
                            name={name}
                            id={name}
                            onFocus={() => {
                                {isFocus ? '' : setFocus(!isFocus)}
                            }}
                            onBlur={(e) => {
                                {!e.target.value && isFocus ? setFocus(!isFocus) : ''};
                            }}
                            onChange={onChange}
                            {...rest}
                            />
                    </div> 
                }
            </div>
        </>
    )
}

export default Input
'use client'

import React, { HTMLProps, MouseEvent, useState } from 'react';
import styles from '@/components/elements/Input/input-global.module.scss';
import Button from '@/components/elements/Button/Button';
import * as MD from 'react-icons/md';
import * as FA from 'react-icons/fa';

interface IInputProps extends HTMLProps<HTMLInputElement>{
    inputType : string,
    label : string,
    containerStyle? : string,
    inputStyle? : string
}

const Input : React.FC<IInputProps> = ({inputType, label, name, containerStyle, inputStyle, ...rest}) => {
    
    const [isFocus, setFocus] = useState<boolean>(false);
    const [isReveal, setReveal] = useState<boolean>(false);

    const handlePassReveal : (e : MouseEvent<HTMLButtonElement>) => void = (e) => {
        setReveal(!isReveal);
    };
    
    return(
        <>
            <div className={`${styles['input-container']}`}>
                {inputType === "email" &&
                    <div className={`${styles['email-input']} ${isFocus && styles.isActive}`}>
                        <MD.MdOutlineAlternateEmail style={{color : '#F3F3F3', fontSize : 16}} />
                        <label htmlFor={inputType} id={`${inputType}-label`}>{label}</label>
                        <input 
                            type={inputType} 
                            name={inputType}
                            id={inputType}
                            onFocus={() => {
                                {isFocus ? '' : setFocus(!isFocus)}
                            }}
                            onBlur={(e) => {
                                {!e.target.value && isFocus ? setFocus(!isFocus) : ''}
                            }} />
                    </div> 
                }
                {inputType === "password" &&
                    <div className={`${styles['email-input']}  ${isFocus && styles.isActive}`}>
                        <MD.MdOutlineLock style={{color : '#F3F3F3', fontSize : 16}} />
                        <label htmlFor={inputType} id={`${inputType}-label`}>{label}</label>
                        <input 
                            type={!isReveal ? inputType : "text"} 
                            name={inputType}
                            id={inputType}
                            onFocus={() => {
                                {isFocus ? '' : setFocus(!isFocus)}
                            }}
                            onBlur={(e) => {
                                {!e.target.value && isFocus ? setFocus(!isFocus) : ''}
                            }} />
                        <Button className={styles['reveal-btn']} onClick={handlePassReveal} btnType="button">
                            {!isReveal ?
                                <FA.FaEye style={{color : '#F3F3F3', fontSize : 16}} />
                                :
                                <FA.FaEyeSlash style={{color : '#F3F3F3', fontSize : 16}} />
                            }
                        </Button>
                    </div> 
                }
            </div>
        </>
    )
}

export default Input
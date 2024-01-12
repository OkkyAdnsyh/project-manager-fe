import React, { HTMLProps } from 'react';
import styles from '@/components/elements/Input/input-global.module.scss';

interface IInputProps extends HTMLProps<HTMLInputElement>{
    inputType : string,
    label : string,
    containerStyle? : string,
    inputStyle? : string
}

const Input : React.FC<IInputProps> = ({inputType, label, name, containerStyle, inputStyle, ...rest}) => {
    return(
        <>
            {inputType === "text" || inputType === "password" || inputType === "email" ?
                <div className={styles['input-container']}>
                    <label htmlFor={name}>{label}</label>
                    <input type={inputType} />
                </div>
                :
                ""
            }
        </>
    )
}

export default Input
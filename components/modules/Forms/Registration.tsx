"use client";

import FormControl from '@/components/elements/FormControl/FormControl'
import Input from '@/components/elements/Input/Input';
import Button from '@/components/elements/Button/Button';
import { IRegistration } from '@/globalType/interfaces/Interfaces';
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import styles from '@/components/modules/Forms/form.module.scss';

const Registration = () => {
  
  const [formData, setFormData] = useState<IRegistration>({
    email : '',
    password : '',
    username : ''
  });
  const [passCheckValid, setPassCheck] = useState<boolean>(true);
  const [isValid, setValid] = useState<boolean>(true);

  const invalidRegex = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setFormData((prevData) => ({...prevData, [name] : value}));
  }

  const handleStateReset = (e : MouseEvent<HTMLButtonElement>) => {
    setFormData((prevData) => ({...prevData, email : '', password : ''}));
  };

  const handlePassCheck = (e : ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if(value !== formData.password){
      {passCheckValid ? setPassCheck(!passCheckValid) : ''}
    } else {
      {!passCheckValid ? setPassCheck(!passCheckValid) : ''}
    }
  };

  const handleFormSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(formData).includes(invalidRegex)){
      setValid(false);
    } else {
      setValid(true);
    };
  }

  return (
    <>
      <FormControl className={`${styles['user-form']}`}>
        <Input inputType='email' name='email' label='Email' onChange={handleInputChange} />
        <Input inputType='text' name='username' label='Username' onChange={handleInputChange} />
        <Input inputType='password' name='password' label='Password' onChange={handleInputChange} />
        <Input inputType='password' name='passwordCheck' label='Validate Password' onChange={handlePassCheck} inputStyle={!passCheckValid ? 'alert' : ""}/>
        {!isValid ? <p className={styles.alert}>* input not valid</p> : ''}
        <section className={styles['btn-group']}>
          <Button btnType='submit'>
            <p>sign up</p>
          </Button>
          <Button btnType='reset' onClick={handleStateReset}>
            <p>cancel</p>
          </Button>
        </section>
      </FormControl>
    </>
  )
}

export default Registration
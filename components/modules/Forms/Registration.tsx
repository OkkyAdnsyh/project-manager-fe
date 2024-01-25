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
  const [passIsSimilar, setPassIsSimilar] = useState<boolean>(true);
  const [inputIsValid, setInputIsValid] = useState({
    email : true,
    password : true,
    username : true
  });

  const invalidRegex : RegExp = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g

  const handleSanitize = (value : string, name : string) => {
    if(value.match(invalidRegex)){
      setInputIsValid((prevState) => ({...prevState, [name] : false}))
    }else{
      setInputIsValid((prevState) => ({...prevState, [name] : true}))
    }
  }

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setFormData((prevData) => ({...prevData, [name] : value}));
    handleSanitize(value, name);
  }

  const handleStateReset = (e : MouseEvent<HTMLButtonElement>) => {
    setFormData((prevData) => ({...prevData, email : '', password : ''}));
  };

  const handlePassCheck = (e : ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if(value !== formData.password){
      {passIsSimilar ? setPassIsSimilar(!passIsSimilar) : ''}
    } else {
      {!passIsSimilar ? setPassIsSimilar(!passIsSimilar) : ''}
    }
  };

  const handleFormSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <>
      <FormControl className={`${styles['user-form']}`} method='post' action={''} onSubmit={handleFormSubmit}>
        <Input inputType='email' name='email' label='Email' onChange={handleInputChange} inputStyle={inputIsValid.email === false ? "alert" : ''}/>
        <Input inputType='text' name='username' label='Username' onChange={handleInputChange} inputStyle={inputIsValid.username === false ? "alert" : ''}/>
        <Input inputType='password' name='password' label='Password' onChange={handleInputChange} />
        <Input inputType='password' name='passwordCheck' label='Validate Password' onChange={handlePassCheck} inputStyle={!passIsSimilar ? 'alert' : ""}/>
        {inputIsValid.email === false || inputIsValid.username === false ?
          <p className={styles.alert}>
            *Your Input Is Invalid
          </p>
          :
          ''
        }
        <section className={styles['btn-group']}>
          <Button 
          btnType='submit'
          disabled={
            Object.values(inputIsValid).includes(false) || Object.values(formData).includes('') ?
            true : false
          }
          >
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
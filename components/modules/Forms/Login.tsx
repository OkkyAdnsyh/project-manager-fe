"use client";

import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import FormControl from '@/components/elements/FormControl/FormControl';
import Input from '@/components/elements/Input/Input';
import styles from '@/components/modules/Forms/form.module.scss';
import Button from '@/components/elements/Button/Button';
import { ILogin } from '@/globalType/interfaces/Interfaces';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [formData, setFormData] = useState<ILogin>({
    email : "",
    password : ""
  })
  const router = useRouter();

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setFormData((prevData) => ({...prevData, [name] : value}));
  }

  const handleStateReset = (e : MouseEvent<HTMLButtonElement>) => {
    setFormData((prevData) => ({...prevData, email : '', password : ''}));
  };

  const handleFormSubmit : (e : FormEvent<HTMLFormElement>) => void = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/user-login', {
      method : 'post',
      body : JSON.stringify({
        email : formData.email,
        password : formData.password
      })
    })
    .then(res => res.json());

    router.push(`/dashboard`);
    
    console.log(res.message);
  }

  return (
    <>
      <FormControl onSubmit={handleFormSubmit} className={styles['user-form']}>
        <Input inputType='email' label='Email' onChange={handleInputChange}/>
        <Input inputType='password' label='Password' onChange={handleInputChange}/>
        <section className={styles['btn-group']}>
          <Button btnType='submit'>
            <p>login</p>
          </Button>
          <Button btnType='reset' onClick={handleStateReset}>
            <p>cancel</p>
          </Button>
        </section>
      </FormControl>
    </>
  )
}

export default Login
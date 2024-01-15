"use client";

import React, { useState } from 'react';
import FormControl from '@/components/elements/FormControl/FormControl';
import Input from '@/components/elements/Input/Input';
import styles from '@/components/modules/Forms/form.module.scss';
import Button from '@/components/elements/Button/Button';

const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);


  return (
    <>
      <FormControl className={styles['login-form']}>
        <Input inputType='email' label='Email' />
        <Input inputType='password' label='Password' />
        <section className={styles['btn-group']}>
          <Button btnType='submit'>
            <p>login</p>
          </Button>
          <Button btnType='reset'>
            <p>cancel</p>
          </Button>
        </section>
      </FormControl>
    </>
  )
}

export default Login
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Register.module.css'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

const schema = z.object({
    email: z.string().min(1, { message: 'Required' }),
    password1: z.string().min(1, { message: 'Required' }),
    password2: z.string().min(1, { message: 'Required' }),
    });
const Register = () => {
    const {register,handleSubmit,formState: { errors },} = useForm({resolver: zodResolver(schema),});

    return (
        <div className={styles.RegisterContainer}>
            <div className={styles.RegisterWrapper}>
                <div className={styles.RegisterImageWrapper}>
                    <div className={styles.RegisterImage}>
                        <Image  src="/assets/images/logo-devlinks-large.svg" alt="devlink-logo" fill />
                    </div>
                </div>            
                <form onSubmit={handleSubmit((d) => console.log(d))} className={styles.RegisterForm} action="">
                <h1 className={styles.RegisterH1}>
                    Create account
                </h1>
                <p className={styles.RegisterDescription}>
                Let’s get you started sharing your links!
                </p>
                <label  className={styles.RegisterLabel} htmlFor="">
                    Email adress
                </label>
                <div className={styles.RegisterInputWrapper}>
                    <Image className={styles.RegisterImageInput} src='/assets/images/icon-email.svg' alt='icon-email' height={16} width={16} />
                    <input style={errors.email ? { border: '#EC5757 1px solid' } : {}}   {...register('email')}  className={styles.RegisterInput} type="text" placeholder='e.g. alex@email.com' />
                    {errors.email && <p className={styles.RegisterError}>Can't be empty</p>}
                </div>
                <label className={styles.RegisterLabel} htmlFor="">
                    Create password
                </label>
                
                <div className={styles.RegisterInputWrapper}>
                    <Image  className={styles.RegisterImageInput} src='/assets/images/icon-password.svg' alt='icon-password' height={16} width={16} />
                    <input style={errors.password1 ? { border: '#EC5757 1px solid' } : {}}    {...register('password1')} className={styles.RegisterInput} type="text" placeholder='At least 8 characters' />
                    {errors.password1 && <p className={styles.RegisterError}>Can't be empty</p>}
                </div>
                <label className={styles.RegisterLabel} htmlFor="">
                    Confirm password
                </label>
                
                <div className={styles.RegisterInputWrapper}>
                    <Image  className={styles.RegisterImageInput} src='/assets/images/icon-password.svg' alt='icon-password' height={16} width={16} />
                    <input style={errors.password2 ? { border: '#EC5757 1px solid' } : {}}    {...register('password2')} className={styles.RegisterInput} type="text" placeholder='At least 8 characters' />
                    {errors.password2 && <p className={styles.RegisterError}>Can't be empty</p>}
                </div>
                <p className={styles.RegisterP}>
                Password must contain at least 8 characters
                </p>
                <button className={styles.RegisterButton}>Create new account</button>
                <div className={styles.RegisterDiv}>
                    Already have a account
                    <Link href={'/login'} className={styles.RegisterNoAccount}>
                        Login
                    </Link>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Register

"use client"

/* eslint-disable react/no-unescaped-entities */
import React,{useState} from 'react'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import type { Database } from '@/lib/database.types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const Schema = z.object({
    email: z.string().min(1, { message: 'Required' }),
    password: z.string().min(1, { message: 'Required' }),
    });
const Login = () => {
    const {register,handleSubmit,watch,formState: { errors },} = useForm({resolver: zodResolver(Schema),});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const supabase = createClientComponentClient<Database>()

        const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
            },
        })
        }
    
        const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        }
    
        const handleSignOut = async () => {
        await supabase.auth.signOut()
        }
    return (
        <div className={styles.LoginContainer}>
            <div className={styles.LoginWrapper}>
                <div className={styles.LoginImageWrapper}>
                    <div className={styles.LoginImage}>
                        <Image  src="/assets/images/logo-devlinks-large.svg" alt="devlink-logo" fill />
                    </div>
                </div>
                <form onSubmit={handleSubmit(()=>{
                    const watched=watch()
                    setEmail(watched.email)
                    setPassword(watched.password)
                    handleSignIn()
                })} className={styles.LoginForm} action="">
                    <h1 className={styles.LoginH1}>
                        Login
                    </h1>
                    <p className={styles.LoginDescription}>
                    Add your details below to get back into the app
                    </p>
                    <label style={errors.email ? { color: '#EC5757' } : {}} className={styles.LoginLabel} htmlFor="">
                        Email adress
                    </label>
                    <div  className={styles.LoginInputWrapper}>
                        <Image className={styles.LoginImageInput} src='/assets/images/icon-email.svg' alt='icon-email' height={16} width={16} />
                        <input  style={errors.email ? { border: '#EC5757 1px solid' } : {}}   {...register('email')} className={styles.LoginInput} type="text" placeholder='e.g. alex@email.com' />
                        {errors.email && <p className={styles.LoginError}>Can't be empty</p>}
                    </div>
                    
                    <label style={errors.password ? { color: '#EC5757' } : {}}  className={styles.LoginLabel} htmlFor="">
                        Password
                    </label>
            
                    <div className={styles.LoginInputWrapper}>
                        <Image  className={styles.LoginImageInput} src='/assets/images/icon-password.svg' alt='icon-password' height={16} width={16} />
                        <input style={errors.password ? { border: '#EC5757 1px solid' } : {}}    {...register('password')} className={styles.LoginInput} type="text" placeholder='Enter your password' />
                        {errors.password && <p className={styles.LoginError}>Can't be empty</p>}
                    </div>
                    <button type='submit' className={styles.LoginButton}>Login</button>
                    <div className={styles.LoginDiv}>
                        Dont have a account
                        <Link  href='/register'className={styles.LoginNoAccount}>
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

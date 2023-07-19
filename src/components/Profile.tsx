import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Profile.module.css"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    firstname: z.string().min(1, { message: 'Required' }),
    lastname: z.string().min(1, { message: 'Required' }),
    email: z.string().min(1, { message: 'Required' }),
    });
const Profile = () => {
    const {register,handleSubmit,formState: { errors },} = useForm({resolver: zodResolver(schema),});

    return (
        <div className={styles.Profile}>
            <h1 className={styles.ProfileH1}>
                Profile Details
            </h1>
            <p className={styles.ProfileP}>
            Add your details to create a personal touch to your profile.
            </p>
            <div className={styles.ProfilePicture}>
                <span className={styles.ProfileSpan2}>Profile picture</span>
                <div className={styles.UploadImage}>
                    <Image src={'/assets/images/icon-upload-image.svg'} alt='icon-upload-image' width={24}height={24} />
                    <span className={styles.ProfileSpan}>
                        + Upload Image
                    </span>
                </div>
                <div className={styles.ProfileDiv}>
                    <p className={styles.ProfileP}>Image must be below 1024x1024px.<br/>Use PNG or JPG format.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit((d) => console.log(d))} action="">
                <div className={styles.ProfileForm}>
                    <div className={styles.ProfileFormRow}>
                        <label className={styles.ProfileLabel} htmlFor="">
                            First name*
                        </label>
                        <input style={errors.firstname ? { border: '#EC5757 1px solid' } : {}}  {...register('firstname')} className={styles.ProfileInput} placeholder='e.g.John' type="text" />
                    </div>
                    <div className={styles.ProfileFormRow}>
                        <label className={styles.ProfileLabel} htmlFor="">
                            Last name*
                        </label>
                        <input style={errors.lastname ? { border: '#EC5757 1px solid' } : {}}  {...register('lastname')} className={styles.ProfileInput} placeholder='e.g.Applessed' type="text" />
                    </div>
                    <div className={styles.ProfileFormRow}>
                        <label className={styles.ProfileLabel} htmlFor="">
                            Email
                        </label>
                        <input  style={errors.email ? { border: '#EC5757 1px solid' } : {}}  {...register('email')} className={styles.ProfileInput} placeholder='e.g.email@example.com' type="text" />
                    </div>
                </div>
            <div className={styles.ProfileBottom}>
                <button className={styles.ProfileButtonSave}>Save</button>
            </div>
            </form>
        </div>
    )
}

export default Profile

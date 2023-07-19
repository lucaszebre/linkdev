/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '@/styles/Customize.module.css'
import Image from 'next/image'

const Customize = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.CustomizeWrapper}>
                <div className={styles.illustration}>
                    <div className={styles.illustrationImage}>
                        <Image src={'/assets/images/illustration-phone-mockup.svg'} alt='illustration-mockup' fill />
                    </div>
                </div>
                <div className={styles.CustomizeContainer}>
                <h1 className={styles.CustomizeH1}>
                    Customize your links
                </h1>
                <p className={styles.CustomizePContainer}>
                    Add/Edit/Remove links below and then share all your profiles with the world!
                </p>
                <button className={styles.CustomizeButton}>
                    + Add new link
                </button>
                <div className={styles.EmptyDiv}>
                    <Image src={'/assets/images/illustration-empty.svg'} width={250} height={152} alt='illustration-empty' />
                    <h2 className={styles.CustomizeH2}>
                        Let's get you started
                    </h2>
                    <p className={styles.CustomizeP}>
                    Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
                    </p>
                </div>
                <div className={styles.CustomizeFooter}>
                    <button className={styles.CustomizeSaveButton}>
                        Save
                    </button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Customize

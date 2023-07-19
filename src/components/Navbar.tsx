import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.NavbarWrapper}>
            <header className={styles.Navbar}>
                <div className={styles.NavbarImage}>
                    <Image className={styles.LogoPc} src="/assets/images/logo-devlinks-large.svg" alt="devlink-logo" fill />
                    <Image className={styles.LogoMobile}  src="/assets/images/logo-devlinks-small.svg" alt="devlink-logo" fill />
                </div>
            
                    <div className={styles.NavbarDiv}>
                        <button className={styles.LinkButton}>
                            <Image src={'/assets/images/icon-links-header.svg'} alt='link-logo' width={15} height={15} />
                            <span className={styles.NotVisible}>Links</span>
                        </button>
                        <div className={styles.ProfileDiv}>
                            <Image src={'/assets/images/icon-profile-details-header.svg'} alt='icon-profile' width={15} height={15} />
                            <span className={styles.NotVisible1}>Profile Details</span>
                        </div>
                    </div>
                    <button className={styles.NavPreviewButton}>
                        Preview
                    </button>
            </header>
        </div>
    )
}

export default Navbar

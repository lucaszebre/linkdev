import React from 'react'
import styles from '@/styles/Preview.module.css'
import IllustrationLink from './IllustrationLink'
import Link from 'next/link'
import Image from 'next/image'
const Preview = () => {
    return (
        <div className={styles.Preview}>
            <div className={styles.PreviewBackground}></div>
            <div className={styles.PreviewTop}>
                <Link href={'/customize'}><button className={styles.BackEditor}>Back to Editor</button></Link>
                <button className={styles.ShareLink}>Share Link</button>
            </div>
            <div className={styles.PreviewCenter}>
                <div className={styles.PreviewImage}>
                    <Image className={styles.PreviewProfile} src={'/assets/images/logo-devlinks-small.svg'} alt='' fill />
                </div>
                <h1 className={styles.PreviewName}>
                    Ben Wright
                </h1>
                <p className={styles.PreviewMail}>
                ben@example.com
                </p>
                <div className={styles.PreviewBody}>
                    <IllustrationLink name='github' />
                    <IllustrationLink name='github' />
                    <IllustrationLink name='github' />
                </div>
            </div>
        </div>
    )
}

export default Preview

import React from 'react'
import Image from 'next/image'
import styles from "@/styles/IllustrationLink.module.css"

    const IllustrationLink = (props:{
        name:string
    }) => {
    return (
        <div className={styles.IllustrationLink}>
            <div className={styles.IllustrationLinkDiv1}>
                <Image src={`/assets/images/icon-${props.name}.svg`} alt='logo' width={16} height={16} />
                <span className={styles.IllustrationLinkSpan}>{props.name}</span>
            </div>
            <Image src={'/assets/images/icon-arrow-right.svg'} alt='arrow-right' width={16} height={16} />
        </div>
    )
    }

    export default IllustrationLink

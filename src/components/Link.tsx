import React from 'react'
import styles from '@/styles/Link.module.css'
import Image from 'next/image'
const Link = (props:{
    number:number
}) => {
    return (
        <div className={styles.Link}>
            <div className={styles.LinkHeader}>
                <div className={styles.LinkHeaderDiv1}>
                    <Image src={'/assets/images/icon-drag-and-drop.svg'} alt='drag-and-drop' width={20} height={20} />
                    <span className={styles.LinkNumber}>
                        Link #{props.number}
                    </span>
                </div>
                <button className={styles.LinkRemove}>
                    Remove
                </button>
            </div>
            <div className={styles.LinkBody}>
                <label className={styles.LinkLabel} htmlFor="">
                    Platform
                </label>
                <select className={styles.LinkSelect} name="" id=""></select>
                <label className={styles.LinkLabel} htmlFor="">Link</label>
                <div className={styles.LinkWrapperInput}>
                    <Image className={styles.LinkIcon} src={'/assets/images/icon-link.svg'} alt='icon-link' width={16} height={16} />
                    <input className={styles.LinkInput} type="text" />
                </div>
            </div>
        </div>
    )
}

export default Link

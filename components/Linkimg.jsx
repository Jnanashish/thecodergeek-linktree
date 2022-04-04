/* eslint-disable @next/next/no-img-element */
import React from 'react'

// import css
import styles from "../styles/linkimg.module.css"

function Linkimg(props) {
    return (
        <div className={styles.linkimg_con}>
            <a href={props.link}>
                <img src={props.imagePath} className={styles.img} alt="Da banner" />
            </a>
        </div>
    )
}

export default Linkimg
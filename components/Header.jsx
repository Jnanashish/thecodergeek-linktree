// top section that contain about profile info
import React from 'react'
import Image from 'next/image'

// image
import logo from "../public/logo.png"
import styles from "../styles/header.module.css"

const Header = () => {
    return (
    <div>
        <header className={styles.header}>
            <div className={styles.logo_con} >
                <Image objectFit="cover" src={logo} alt="logo"/>
            </div>
            
            <div className={styles.header_text}>
                <h1><span>@</span>thecodergeek</h1>
                <p>Get The best Programming Courses, Books, Videos. Join our community .</p>
            </div>
        </header>
    </div>
    )
}

export default Header;
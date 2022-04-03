import React from 'react'

// import css
import styles from "../styles/linkcard.module.css"

const Linkcard = (props) => {
    return (
        <div className={styles.link_con}>
            <a style={{fontWeight:"500px"}} href={props.link}>
                Get an Guaranteed internship at India’s most desirable companies 🤯
            </a>
        </div>            
        
    )
}

export default Linkcard;

// {props.title}
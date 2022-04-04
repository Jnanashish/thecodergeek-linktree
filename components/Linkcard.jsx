import React from 'react'

// import css
import styles from "../styles/linkcard.module.css"

const Linkcard = (props) => {
    return (
        <div className={styles.link_con}>
            <a style={{fontWeight:"500px"}} href={props.link}>
                {props.title}
            </a>
        </div>               
    )
}

export default Linkcard;
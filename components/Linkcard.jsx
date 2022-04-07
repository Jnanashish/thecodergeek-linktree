import React from 'react'

// import css
import styles from "../styles/linkcard.module.css"

const updateClick = (id) =>{
    fetch(`https://desolate-brushlands-45412.herokuapp.com/api/links/update/count/${id}`, { method: 'PATCH' }) 
}

const Linkcard = (props) => {
    return (
        <div className={styles.link_con}>
            <a onClick={() => updateClick(props.id)} style={{fontWeight:"500px"}} href={props.link}>
                {props.title}
            </a>
        </div>               
    )
}

export default Linkcard;
import {useState, useEffect} from "react";

// import css
import styles from "../styles/footer.module.css"

const Footer = () =>{
    const [count, setCount] = useState('')
    useEffect(()=>{ pageview();},[]) 

    const pageview = () =>{
        // page view 1 for production
        fetch('https://api.countapi.xyz/update/thecodergeek.co/pageview/?amount=1')
        .then(res => res.json())
        .then((data) => {
            setCount(data.value)
        })
    }

    return(
        <div className={styles.footer}>
            <h3>Total Page view 👁️ {count}</h3>
            <h3>Made with ❤️ in India by <a href="https://www.linkedin.com/in/jnanashish/">@jsh</a></h3>
        </div>
    )
}

export default Footer;


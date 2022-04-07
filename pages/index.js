import React, {useState} from "react"
import styles from '../styles/home.module.css';

// import components
import Header from '../components/Header';
import Linkcard from '../components/Linkcard';
import Footer from '../components/Footer';
import Linkimg from '../components/Linkimg';
import Jobcard from "../components/Jobcard";


export default function Home(props) {
    const [showhome, setShowhome] = useState(true);
    const [showjd, setShowjd] = useState(false);

    const {linkdata, imgdata, jdarr} = props;

    const handlehomeclick = () =>{
        setShowhome(!showhome)
        setShowjd(!showjd)
    }


    return (
        <div className={styles.container}>
            <Header/>

            <div className={styles.tab_con_lp}>
                <button onClick={handlehomeclick}>Home</button>
                <button onClick={handlehomeclick}>Job Feed</button>
                <button><a href="https://www.instagram.com/thecodergeek">Instagram <b>(60k+)</b></a></button>
                <button> <a href="https://t.me/interviewpreptech">Telegram <b>(7k+)</b></a></button>
            </div>
            <div className={styles.tab_con_mobile}>
                <button onClick={handlehomeclick}>Home</button>
                <button onClick={handlehomeclick}>Job Feed</button>
            </div>


            {showhome && <div className={styles.home_feed}>
                {linkdata.map((item) => {
                    return(
                        <Linkcard id={item._id} key={item._id} title={item.title} link={item.link}/>
                    )
                })}

                {imgdata.length > 0 && 
                    <Linkimg imagePath = {imgdata[0].imagePath} link = {imgdata[0].link}/>
                }  
            </div>}

            {showjd && <div className={styles.job_feed}>
                {jdarr.map((item) => {
                    return(
                        <Jobcard key = {item.id} data = {item}/>
                    )
                })}

            </div>} 

            <Footer/>
        </div>
    )
}


export const getStaticProps = async () => {
    const res = await fetch(`https://desolate-brushlands-45412.herokuapp.com/api/links`)
    const linkdata = await res.json()     

    const imgres = await fetch(`https://desolate-brushlands-45412.herokuapp.com/api/daimg`)
    const imgdata = await imgres.json() 

    const jdres = await fetch("https://interviewprep-api.herokuapp.com/api/jd/get?page=1&size=20")
    const jddata = await jdres.json()
    const jdarr = jddata.data

    return {
        props :{
            linkdata, imgdata, jdarr
        },
        revalidate: 10,
    }
}

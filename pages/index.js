import styles from '../styles/home.module.css';
import {API} from "../backend";

// import components
import Header from '../components/Header';
import Linkcard from '../components/Linkcard';
import Footer from '../components/Footer';
import Linkimg from '../components/Linkimg';


export default function Home(props) {
    const {linkdata, imgdata} = props
    return (
        <div className={styles.container}>
            <Header/>
            {linkdata.map((item) => {
                return(
                    <Linkcard id={item._id} key={item._id} title={item.title} link={item.link}/>
                )
            })}

            {imgdata.length > 0 && 
                <Linkimg imagePath = {imgdata[0].imagePath} link = {imgdata[0].link}/>
            }            
            <Footer/>
        </div>
  )
}


export const getStaticProps = async () => {
    const res = await fetch(`https://desolate-brushlands-45412.herokuapp.com/api/links`)
    const linkdata = await res.json()     

    const imgres = await fetch(`https://desolate-brushlands-45412.herokuapp.com/api/daimg`)
    const imgdata = await imgres.json() 

    return {
        props :{
            linkdata, imgdata
        }
    }
}

import styles from '../styles/home.module.css'


// import components
import Header from '../components/Header';
import Linkcard from '../components/Linkcard';
import Footer from '../components/Footer';
import Linkimg from '../components/Linkimg';


export default function Home(props) {
    const {linkdata} = props
    console.log(linkdata );
    return (
        <div className={styles.container}>
            <Header/>
            <Linkcard/>
            <div>
            {/* {linkimg.length > 0 && 
                <Linkimg img={linkimg[0].img} link = {linkimg[0].link}/>
            } */}
            </div>
            <Linkcard/>
            <Linkcard/>
            <Linkcard/>
            <Footer/>
        </div>
  )
}


export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/links')
    const data = await res.json()

    return {
        props: {
            linkdata : data.link,
        }
    }
}

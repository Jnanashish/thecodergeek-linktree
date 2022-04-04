import styles from '../styles/home.module.css'


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
                    <Linkcard key={item._id} title={item.title} link={item.link}/>
                )
            })}
            
            <div>
            {imgdata.length > 0 && 
                <Linkimg imagePath = {imgdata[0].imagePath} link = {imgdata[0].link}/>
            }
            </div>
            <Footer/>
        </div>
  )
}


export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/links')
    const data = await res.json()

    const imgres = await fetch('http://localhost:3000/api/daimg')
    const imgdata = await imgres.json()

    return {
        props: {
            linkdata : data.link,
            imgdata : imgdata.daimg
        }
    }
}

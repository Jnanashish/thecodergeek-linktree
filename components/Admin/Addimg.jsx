import React, {useState, useEffect} from "react"
import styles from "../../styles/Admin/addlink.module.css"


const Adddaimg = () =>{
    const [link, setLink] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/api/daimg')
            const temp = await res.json()
            setData(temp.daimg)
        }
        fetchData()
    }, [])

    const addData = async (e) =>{
        e.preventDefault();
        let res = await fetch("http://localhost:3000/api/daimg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                link : link,
                imagePath: imagePath,
            }),
        });
        if(res.status == 200){
            alert("Success")
        } else {
            alert("ERROR")
        }
        setLink('');
        setImagePath('')
    }

    const handleclick = (id) =>{
        fetch(`http://localhost:3000/api/daimg/${id}`, { method: 'DELETE' })
        .then((res) =>
            alert("Deleted")
        ) 
        .catch((err) => {
            alert(err)
        }) 
    }

    return (
        <div>
        <form className="con">
            <div className = {styles.admin_grid}>
                <div></div>
                <a className = {styles.admin_input}  
                    href="https://cloudinary.com/console/c-9cc2f94dd50e7fab18a4af23d9c442/"
                    target="_blank" rel="noopener noreferrer">
                    <b>Cloudinary 📡</b>
                </a>
            </div>
            <div className = {styles.admin_grid}>
                <h3 className = {styles.admin_label}>Link : </h3>
                <input 
                    className = {styles.admin_input}  
                    value = {link}
                    onChange = {(e) => setLink(e.target.value)}
                    type="text" 
                    placeholder = "Link"
                />
            </div>
            
            <div className = {styles.admin_grid}>
                <h3 className = {styles.admin_label}>Link of Poster : </h3>
                <input 
                    className = {styles.admin_input}  
                    value = {imagePath}
                    onChange = {(e) => setImagePath(e.target.value)}
                    type="text" 
                    placeholder = "Cloudinary link"
                />
            </div>
            <div className={styles.admin_grid}>
                <div></div>
                <div>             
                    <button 
                        className = {styles.admin_input} 
                        type= "button" 
                        onClick={addData}
                    >
                        Add Poster
                    </button>
                </div>
            </div>
        </form>

        <div>
            {data.length !==0 && data.map((item) => {
                return(
                    <div className={styles.link_con} key={item._id}>
                        <h3>{item.link}</h3>
                        <h4>Total Click : {item.totalclick}</h4>
                        <button onClick={() => handleclick(item._id)}>Delete</button>
                    </div>
                )
            })}
        </div>        
        </div>
    )    
}

export default Adddaimg;
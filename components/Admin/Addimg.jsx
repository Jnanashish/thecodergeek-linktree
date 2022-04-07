import React, {useState, useEffect} from "react"
import styles from "../../styles/Admin/addlink.module.css"


const Adddaimg = () =>{
    const [link, setLink] = useState('');
    const [data, setData] = useState([])

    const formData = new FormData();  
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
    }

    const addData = async (e) =>{
        e.preventDefault();
        formData.append("link", link)
        const res = await fetch('https://desolate-brushlands-45412.herokuapp.com/api/daimg/add',{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            alert('Data Added Successfully') 
        } else {
            alert("An error Occured")
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://desolate-brushlands-45412.herokuapp.com/api/daimg')
            const temp = await res.json()
            setData(temp)
        }
        fetchData()
    }, [])


    const handleclick = (id) =>{
        fetch(`https://desolate-brushlands-45412.herokuapp.com/api/daimg/delete/${id}`, { method: 'DELETE' })
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
                <h3 className = {styles.admin_label}>Link : </h3>
                <input 
                    className = {styles.admin_input}  
                    value = {link}
                    onChange = {(e) => setLink(e.target.value)}
                    type="text" 
                    placeholder = "Link"
                />
            </div>
            
            <div className={styles.admin_grid}> 
                <h3 className={styles.admin_label}>Image for ad  : </h3> 
                <input className={styles.admin_input} onChange = {handleimginp} name="image" type="file"/> 
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
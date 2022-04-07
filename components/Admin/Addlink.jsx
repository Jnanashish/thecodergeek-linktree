import React,{useState} from 'react'

// import styles
import styles from "../../styles/Admin/addlink.module.css"
import { API } from "../../backend"

function Addlink() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [para, setPara] = useState('');

    const formData = new FormData();  
    const handleimginp = (e) =>{
        const file = e.target.files ;
        formData.append('photo', file[0]);
    }


    const addData = async (e) =>{
        e.preventDefault();
        formData.append("link", link)
        formData.append("title", title)
        formData.append("para", para)

        const res = await fetch('https://desolate-brushlands-45412.herokuapp.com/api/links/add',{
            method : "POST",
            body : formData
        })

        if(res.status === 201){
            alert('Data Added Successfully') 
        } else {
            alert("An error Occured")
        }
    }

    return (
        <form className="con">
            <div className = {styles.admin_grid}>
                <h3 className = {styles.admin_label}>Title : </h3>
                <input 
                    className = {styles.admin_input}  
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    type="text" 
                    placeholder = "Title"
                />
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
                <h3 className = {styles.admin_label}>Paragraph : </h3>
                <input 
                    className = {styles.admin_input}  
                    value = {para}
                    onChange = {(e) => setPara(e.target.value)}
                    type="text" 
                    placeholder = "Paragraph (Optional)"
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
                        onClick = {addData}>
                        Add link
                    </button>
                </div>
            </div>

        </form>
    )
}

export default Addlink;
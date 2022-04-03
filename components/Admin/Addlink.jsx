import React,{useState} from 'react'

// import styles
import styles from "../../styles/Admin/addlink.module.css"


function Addlink() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    
    const addData = async (e) =>{
        e.preventDefault();
        let res = await fetch("http://localhost:3000/api/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                link: link,
            }),
        });
        if(res.status == 200){
            alert("Success")
        } else {
            console.log(res);
            alert("ERROR")
        }
        setTitle('');
        setLink('');
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
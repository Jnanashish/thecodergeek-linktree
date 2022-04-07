import React, {useState} from "react"
// import components
import Addimg from "../components/Admin/Addimg"
import Addlink from "../components/Admin/Addlink"
import Editlink from "../components/Admin/Editlink"

// import styles
import styles from "../styles/Admin/admin.module.css"

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    
    const handleclick = () =>{
        if(email == process.env.EMAIL && password == process.env.PASSWORD){
            setFlag(true)
        } 
    }

    return(
        <div>
            {!flag && <div>
                <input 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button onClick={() => handleclick()}>Submit</button>
                </div>
            }

            {flag && <div className={styles.admin_con}>
                    <h1>Admin Panel</h1>
                    <Addlink/>
                    <hr className={styles.hrline} />
                    <Addimg/>
                    <hr className={styles.hrline} />
                    <Editlink/>
                </div>
            }
        </div>
    )
}

export default Admin;
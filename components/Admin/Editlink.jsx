import React, {useState, useEffect} from 'react'

import styles from "../../styles/Admin/editlink.module.css"

function Editlink() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://desolate-brushlands-45412.herokuapp.com/api/links')
            const temp = await res.json()
            setData(temp)
        }
        fetchData()
    }, [])

    const handleclick = (id) =>{
        fetch(`https://desolate-brushlands-45412.herokuapp.com/api/links/delete/${id}`, { method: 'DELETE' })
        .then((res) =>
            alert("Deleted")
        ) 
        .catch((err) => {
            alert(err)
        }) 
    }

    return (
        <div>
            {data.length !==0 && data.map((item) => {
                return(
                    <div className={styles.link_con} key={item._id}>
                        <h3>{item.title}</h3>
                        <h4>Total Click : {item.totalclick}</h4>
                        <button onClick={() => handleclick(item._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
     )
}

export default Editlink
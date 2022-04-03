import React, {useState, useEffect} from 'react'

import styles from "../../styles/Admin/editlink.module.css"

function Editlink() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/api/links')
            const temp = await res.json()
            setData(temp.link)
        }
        fetchData()
    }, [])

    const handleclick = (id) =>{
        fetch(`http://localhost:3000/api/links/${id}`, { method: 'DELETE' })
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
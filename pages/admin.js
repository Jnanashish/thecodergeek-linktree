// import components
import Addimg from "../components/Admin/Addimg"
import Addlink from "../components/Admin/Addlink"
import Editlink from "../components/Admin/Editlink"

// import styles
import styles from "../styles/Admin/admin.module.css"

export default function admin() {
    return(
        <div className={styles.admin_con}>
            <h1>Admin Panel</h1>
            <Addlink/>
            <hr className={styles.hrline} />
            <Addimg/>
            <hr className={styles.hrline} />
            <Editlink/>
        </div>
    )
}
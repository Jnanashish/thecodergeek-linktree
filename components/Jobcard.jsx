/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "../styles/jobcard.module.scss"


const Jobcard = (props) => {
    const {title, degree, batch, imagePath, jobtype, link} = props.data
    return (
        <div>
            <a className={styles.jobcard_con} href={link}>
                <div className = {styles.companylogo_con}>
                    {imagePath === 'none' && 
                    <img src="https://res.cloudinary.com/dbmv2z9l9/image/upload/v1649348783/buildings-min_1_1_idyes3.png" alt="Company Logo"/>}
                    {imagePath !== 'none' && <img src={imagePath} alt="Company logo"/>}     
                </div>

                <p className={styles.jobtitle}>{title}</p>
                <div className={styles.jobdetails}>
                    <div className={styles.jobdetails_item}>
                        <h5>Degree :</h5>
                        <p>{degree}</p>
                    </div> 
                    <div className={styles.jobdetails_item}>
                        <h5>Batch :</h5>
                        <p>{batch}</p>
                    </div>
                    <div className={styles.jobdetails_item}>
                        <h5>Jobtype : </h5>
                        <p>{jobtype}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Jobcard
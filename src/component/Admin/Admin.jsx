import React from 'react';
import styles from './Admin.module.css';
import Skeleton from '@mui/material/Skeleton';

const Admin = () => {
    return (
        <div className={styles.Admin}>
            <div className={styles.AdminBlock}>

            < Skeleton variant="rectangular" sx={{borderRadius: "20px"}} width={266} height={200} />


                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

                <div className={styles.AdminCard}>
                    <h2>CodingHunger</h2>
                    <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                    <h3>Score : 50%</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum</p>
                </div>

            </div>
        </div>
    );
};

export default Admin;
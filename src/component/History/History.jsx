import React from 'react'
import styles from './History.module.css';
import Skeleton from '@mui/material/Skeleton';

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        < Skeleton variant="rectangular" sx={{borderRadius: "20px"}} width={266} height={200} />


        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>

          <h2>Frontend Developer</h2>

          <p>Resume Name : Resume.pdf</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ipsa asperiores tenetur cumque ab, commodi illum sed doloremque quas sint error cupiditate fugit iure ad. Laudantium corporis, natus soluta nulla amet obcaecati quam maiores cum sed accusamus rem, cupiditate reprehenderit ea cumque quos voluptate sit tempore veniam temporibus molestiae.ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Date: 2023-01-01</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>

          <h2>Frontend Developer</h2>

          <p>Resume Name : Resume.pdf</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ipsa asperiores tenetur cumque ab, commodi illum sed doloremque quas sint error cupiditate fugit iure ad. Laudantium corporis, natus soluta nulla amet obcaecati quam maiores cum sed accusamus rem, cupiditate reprehenderit ea cumque quos voluptate sit tempore veniam temporibus molestiae.ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Date: 2023-01-01</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>

          <h2>Frontend Developer</h2>

          <p>Resume Name : Resume.pdf</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ipsa asperiores tenetur cumque ab, commodi illum sed doloremque quas sint error cupiditate fugit iure ad. Laudantium corporis, natus soluta nulla amet obcaecati quam maiores cum sed accusamus rem, cupiditate reprehenderit ea cumque quos voluptate sit tempore veniam temporibus molestiae.ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Date: 2023-01-01</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>

          <h2>Frontend Developer</h2>

          <p>Resume Name : Resume.pdf</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ipsa asperiores tenetur cumque ab, commodi illum sed doloremque quas sint error cupiditate fugit iure ad. Laudantium corporis, natus soluta nulla amet obcaecati quam maiores cum sed accusamus rem, cupiditate reprehenderit ea cumque quos voluptate sit tempore veniam temporibus molestiae.ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Date: 2023-01-01</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>

          <h2>Frontend Developer</h2>

          <p>Resume Name : Resume.pdf</p>

          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit ipsa asperiores tenetur cumque ab, commodi illum sed doloremque quas sint error cupiditate fugit iure ad. Laudantium corporis, natus soluta nulla amet obcaecati quam maiores cum sed accusamus rem, cupiditate reprehenderit ea cumque quos voluptate sit tempore veniam temporibus molestiae.ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Date: 2023-01-01</p>
        </div>

      </div>
    </div>
  )
}

export default History
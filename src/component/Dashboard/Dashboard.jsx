import React from 'react'
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <div className={styles.DashboardLeft}>
                <div className={styles.DashboardHeader}>
                    <div className={styles.DashboardHeaderTitle}>
                        Smart Resume Screening
                    </div>

                    <div className={styles.DashboardHeaderLargeTitle}>
                        Resume Match Score
                    </div>
                </div>

                <div className={styles.alertInfo}>
                    <div>⚠️ Important Instructions:</div>

                    <div className={styles.dashboardInstruction}>
                        <div>
                            📋 Please paste the complete job description in the "Job Description" field before submitting.
                        </div>

                        <div>
                            📄 Only PDF format (.pdf) resumes are accepted.
                        </div>
                    </div>
                </div>

                <div className={styles.DashboardUploadResume}>
                    <div className={styles.DashboardResumeBlock}>
                        Upload Your Resume
                    </div>

                    <div className={styles.DashboardInputField}>
                        <label htmlFor="inputField" className={styles.analyzeAIBtn}> Upload Resume </label>
                        <input type="file" accept=".pdf" id="inputField" />
                    </div>



                </div>
                <div className={styles.jobDesc}>
                    <textarea
                        className={styles.textArea}
                        placeholder="Paste Your Job Description"
                        rows={10}
                        cols={50}
                    />

                    <div className={styles.AnalyzeBtn}>
                        Analyze
                    </div>
                </div>
            </div>

            <div className={styles.DashboardRight}>
                <div className={styles.DashboardRightTopCard}>
                    <div>Analyze With AI</div>

                    <img
                        className={styles.profileImg}
                        src="https://imgs.search.brave.com/cxUqxVQLw0m6r0Jl8nvDYh-DHKzdyORLphcHFN11hOo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg3/NTUyNjM3L3ZlY3Rv/ci9tZXRhbC1sZXR0/ZXItdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTNnNHI5/XzE3bXJSQlpUZjly/dUNLZ0VNcjgtUm1K/UWc1UEh5NU9pMkpk/az0"
                        alt="AI Resume Analysis"
                    />
                    <h2>codingHunger</h2>
                </div>


                {/* <div className={styles.DashboardRightTopCard}>
                    <div>Result</div>

                    <div style={{ display: "flex" ,justifyContent: "center", alignItems: "center", gap: 20 }}>
                        <h1>75%</h1>
                        <CreditScoreIcon sx={{ fontSize: 22 }} />
                    </div>

                    <div className={styles.feedback }>
                        <h3>Feedback</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur quasi voluptatibus quaerat dicta deserunt ea recusandae sapiente. Dolorum, cum voluptas aspernatur unde excepturi aliquid quia, quis modi tempore atque repellendus labore similique molestias. Modi expedita ab, odit velit deleniti minus, dolores iure earum fuga obcaecati, molestias sed mollitia enim eius! Id, nisi alias modi sunt at quasi laudantium.
                        </p>
                    </div>
                </div> */}

               < Skeleton variant="rectangular" sx={{borderRadius: "20px"}} width={280} height={280} />

            </div>
        </div>
    )
}

export default Dashboard
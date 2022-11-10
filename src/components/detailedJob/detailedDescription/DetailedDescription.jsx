import React from "react";
import lineDelimiter from "services/lineDelimiter";
import styles from './DetailedDescription.module.css';


const DetailedDescription = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <h2 className={styles.header__title}>Job Details</h2>
                <hr className={styles.header__border1} />
                <a className={styles.header__link} href="#a" alt="saved">Save to my list</a>
                <a className={styles.header__link} href="#b" alt="share">Share</a>
            </div>
            <hr className={styles.header__border2} />
            <div className={styles.container__title}>
                <h2>A</h2>
                <div className={styles.container__salary}>
                    <h3 className={styles.salary}>100</h3>
                    <p>Brutto, per year</p>
                </div>
            </div>
            <p>Posted data</p>
            <div className={styles.container}>Description</div>
            <button className={styles.button}>Apply now</button>
            <div className={styles.container}>
                <h2>Additional info</h2>
                <hr />
                <h3>Employment type</h3>
                <div className={styles.container__additional}></div>
                <h3>Benefits</h3>
                <div className={styles.container__additional}></div>
            </div>
            <div className={styles.container}>
                <h2>Attached images</h2>
                <div className={styles.container__images}></div>
            </div>
        </div>
    )
};

export default DetailedDescription;
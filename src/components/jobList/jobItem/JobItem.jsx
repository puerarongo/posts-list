import React from 'react';
import styles from './JobItem.module.css';

const JobItem = ({ data }) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={data.pictures[0]} alt={data.id} />
                <div>
                    <h3 className={styles.title}>{data.title}</h3>
                    <p className={styles.text}>Department name · {data.name}</p>
                    <p className={styles.text}>{data.address}</p>
                </div>
                <div className={styles.data__container}>
                    <div>svg place</div>
                    <p>Posted</p>
                </div>
            </div>
        </>
    )
};

export default JobItem;
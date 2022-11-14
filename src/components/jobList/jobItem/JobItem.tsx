import React from "react";
import IDataList from "../../../types/typeDataList";
import svgPath from "../../../services/svgPath";
import styles from './JobItem.module.css';


interface IJobItem {
    data: IDataList
};

const JobItem: React.FC<IJobItem> = ({ data }) => {

    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={data.pictures[0]} alt={data.id} />
                <div>
                    <h3 className={styles.title}>{data.title}</h3>
                    <p className={styles.text}>Department name · {data.name}</p>
                    <div className={styles.container__address}>
                        <svg className={styles.svg__position}>
                            <use href={svgPath.position + "#position"}></use>
                        </svg>  
                        <p className={styles.text}>{data.address}</p>
                    </div>
                </div>
                <div className={styles.data__container}>
                    <svg className={styles.svg__rectangle}>
                        <use href={svgPath.rectangle + "#rectangle"}></use>
                    </svg>
                    <p>Posted</p>
                </div>
            </div>
        </>
    )
};

export default JobItem;
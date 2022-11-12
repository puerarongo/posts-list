import React, { useState, useEffect } from "react";
import lineDelimiter from "services/lineDelimiter";
import styles from './DetailedDescription.module.css';

import mapAPI from "services/mapAPI";

const DetailedDescription = ({ data }) => {
    const [descriptionArr, setDescriptionArr] = useState([]);

    useEffect(() => {
        if (data) {
            setDescriptionArr(lineDelimiter(data.description))
        }

        mapAPI().then(res => console.log(res)).catch(err => console.error(err))
    }, [data])


    return (
        <div className={styles.main__container}>
            <div className={styles.container__header}>
                <h2 className={styles.header__title}>Job Details</h2>
                <hr className={styles.header__border1} />
                <a className={styles.header__link} href="#a" alt="saved">Save to my list</a>
                <a className={styles.header__link} href="#b" alt="share">Share</a>
            </div>
            <hr className={styles.header__border2} />
            <div className={styles.container__title}>
                <h2>{data.title}</h2>
                <div className={styles.container__salary}>
                    <h3 className={styles.salary}>{data.salary}</h3>
                    <p>Brutto, per year</p>
                </div>
            </div>
            <p>Posted data</p>
            <div className={styles.description__container}>
                <p className={styles.description__text}>{descriptionArr[0]}</p>
                <h3 className={styles.description__title}>Responsopilities:</h3>
                <p className={styles.description__text}>{descriptionArr[1]}</p>
                <h3 className={styles.description__title}>Compensation & Benefits:</h3>
                <p className={styles.description__text}>{descriptionArr[2]}</p>
            </div>
            <button className={styles.button}>Apply now</button>
            <div className={styles.container}>
                <h2>Additional info</h2>
                <hr />
                <h3>Employment type</h3>
                <ul className={styles.additional__list}>
                    {data.employment_type.map((elem, i) => {
                        return (
                            <li className={styles.item__employment} key={i}>
                                <p>{elem}</p>
                            </li>
                        )
                    })}
                </ul>
                <h3>Benefits</h3>
                <ul className={styles.additional__list}>
                    {data.benefits.map((elem, i) => {
                        return (
                            <li className={styles.item__benefits} key={i}>
                                <p>{elem}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.container}>
                <h2>Attached images</h2>
                <hr />
                <ul className={styles.additional__list}>
                    {data.pictures.map((elem, i) => {
                        return (
                            <li className={styles.item__img} key={i}>
                                <img className={styles.img} src={elem} alt={i} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )    
};

export default DetailedDescription;
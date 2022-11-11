import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobItem from "./jobItem/JobItem";
import ErrorPage from "./errorPage/ErrorPage";
import fetchGenerator from "services/generatorAPI";
import styles from './JobList.module.css';


const JobList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchGenerator().then(({ data }) => {
            console.log(data)
            setData([...data])
        })
            .catch(err => setError(err))
    }, [setData]);


    return (
        <section className={styles.section}>
            <div className={styles.list__container}>
                <ul>
                    {!error ? (
                    data.length > 0 && data.map(elem => {
                        return (
                            <li key={elem.id} className={styles.item}>
                                <Link to={`${elem.id}`} className={styles.link}>
                                    <JobItem data={elem} />
                                </Link>
                            </li>
                        )
                    })
                    ) : (
                        <ErrorPage />
                    )}
                </ul>
            </div>
        </section>   
    )
};

export default JobList;
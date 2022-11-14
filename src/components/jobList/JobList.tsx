import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import ReactPaginate from 'react-paginate';
import JobItem from "./jobItem/JobItem";
import ErrorPage from "./errorPage/ErrorPage";
import fetchGenerator from "../../services/generatorAPI";
import IDataList from "../../types/typeDataList";
import styles from './JobList.module.css';


const JobList: React.FC = () => {
    const [data, setData] = useState<IDataList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [postOffSet, setPostOffSet] = useState(0);
    const postPerPage = 10;


    useEffect(() => {
        setLoading(true);
        fetchGenerator().then(({ data }) => {
            console.log(data)
            setData([...data])
        })
            .catch(err => setError(err))
        setLoading(false);
        
    }, [setData]);

    const endOffSet = postOffSet + postPerPage;
    const currentItems = data.slice(postOffSet, endOffSet);
    const pageCount = Math.ceil(data.length / postPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * postPerPage) % data.length;
        setPostOffSet(newOffset);
    };


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            {!error ? (
                                currentItems.length > 0 && data.map(elem => {
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
                        </>
                    )}
                </ul>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                />
            </div>
        </section>   
    )
};

export default JobList;
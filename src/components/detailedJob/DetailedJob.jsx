import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fetchGenerator from "services/generatorAPI";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import DetailedMap from "./detailedMap/DetailedMap";
import NotFound from "components/notFound/NotFound";
import svgPath from "services/svgPath";
import styles from './DetailedJob.module.css';


const DetailedJob = () => {
    const [detailed, setDetailed] = useState("");
    const [error, setError] = useState("");

    const jobId = useParams().jobId;

    useEffect(() => {
        fetchGenerator().then(({ data }) => {
            const findData = data.find(elem => elem.id === jobId);
            if (!findData) {
                throw new Error('Page does not exist');
            }
            setDetailed(findData);
        })
            .catch(err => setError(err))
    }, [jobId]);

    return (
        <>
            {detailed && (
                <>
                    {!error ? (
                        <>
                            <section className={styles.section}>
                                <DetailedDescription data={detailed} />
                                <DetailedMap />
                            </section>
                            <Link to="/" className={styles.return__link}>
                                <svg className={styles.svg__arrow}>
                                    <use href={svgPath.arrow + "#arrow"}></use>
                                </svg>
                                <p className={styles.link__text}>RETURN TO JOB BOARD</p>
                            </Link>
                        </>
                    ) : (
                        <NotFound />
                    )}
                </>
            )}
        </>
    )
};

export default DetailedJob;
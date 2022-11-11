import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchGenerator from "services/generatorAPI";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import DetailedMap from "./detailedMap/DetailedMap";
import NotFound from "components/notFound/NotFound";
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
            {!error ? (
                <section>
                    <DetailedDescription data={detailed} />
                    <DetailedMap />
                </section>
            ) : (
                <NotFound />
            )}
        </>
    )
};

export default DetailedJob;
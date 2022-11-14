import React from "react";
import styles from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
    return (
        <h2 className={styles.title}>Too many requests, please try again later!</h2>
    )
}

export default ErrorPage;
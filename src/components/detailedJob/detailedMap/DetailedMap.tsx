import React from "react";
import svgPath from "../../../services/svgPath";
import styles from './DetailedMap.module.css';

interface IMap {
    name: string,
    address: string,
    phone: string,
    email: string,
}

const DetailedMap: React.FC<IMap> = ({name, address, phone, email}) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Contacts</h2>
            <hr className={styles.border} />
            <div className={styles.container}>
                <div className={styles.feedback__container}>
                    <div className={styles.into__container}>
                        <h2 className={styles.name}>{name}</h2>
                    <div className={styles.address__container}>
                        <svg className={styles.svg__position}>
                            <use href={svgPath.position + "#position"}></use>
                        </svg>
                        <p className={styles.address}>{address}</p>
                    </div>
                    <p className={styles.contact}>{phone}</p>
                    <p className={styles.contact}>{email}</p>
                    </div>
                </div>
            <div className={styles.map__container}>Place for map</div>
            </div>
        </div>
    )
};

export default DetailedMap;
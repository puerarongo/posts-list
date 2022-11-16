import React from "react";
import ReactMapGL from 'react-map-gl';
import token from "../../../services/mapboxToken";
import svgPath from "../../../services/svgPath";
import styles from './DetailedMap.module.css';
// import mapboxgl from 'mapbox-gl';

interface IMap {
    name: string,
    address: string,
    phone: string,
    email: string,
    location: {
        lat: number,
        long: number
    }
}

const DetailedMap: React.FC<IMap> = ({ name, address, phone, email, location }) => {
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
                <div className={styles.map__container}>
                    <div className={styles.map}>
                    <ReactMapGL
                        initialViewState={{
                            latitude: location.lat,
                            longitude: location.long,
                            zoom: 10
                        }}
                        style={{ width: '390px', height: '250px' }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxAccessToken={token}
                    ></ReactMapGL>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailedMap;
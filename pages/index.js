import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import styles from "../styles/Home.module.css";

export default function Home() {
    const location = useGeoLocation();

    const [weather, setWeather] = useState(null);

    const getWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
            )
            .then((res) => {
                setWeather(res.data.main.temp);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>{weather}</div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🚀 Rasha coded this.
                </a>
            </footer>
        </div>
    );
}

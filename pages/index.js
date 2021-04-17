import axios from "axios";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import AutocompletePlace from "../components/autocompletePlace";
import useGeoLocation from "../hooks/useGeoLocation";
import styles from "../styles/Home.module.css";

export default function Home() {
    const location = useGeoLocation();
    const MapWithNoSSR = dynamic(() => import("../components/map"), {
        ssr: false,
    });

    const [weather, setWeather] = useState(null);
    const [place, setPlace] = useState(null);

    const handleSelect = (place) => {
        setPlace(place);
    };

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
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="mapid">
                <MapWithNoSSR
                    lat={location.coordinates.lat}
                    lng={location.coordinates.lng}
                />
                <AutocompletePlace
                    onSelect={() => handleSelect}
                    weather={weather}
                />
                {place && (
                    <div>
                        Info about the place:{" "}
                        <pre>{JSON.stringify(place, null, 2)}</pre>
                    </div>
                )}
                {weather}

                <footer className={styles.footer}>🚀 Rasha coded this.</footer>
            </div>
        </>
    );
}

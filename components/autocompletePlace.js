import axios from "axios";
import React, { useState } from "react";
import SearchCity from "./search";

const AutocompletePlace = (props) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const handleQuery = (e) => {
        setQuery(e.target.value), setisLoading(true);
        if (e.target.value.length > 3) {
            performSearch();
        }
    };

    const performSearch = () => {
        if (query === "") {
            setResults([]);
            setisLoading(false);
        }
        axios
            .get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoicmptaCIsImEiOiJja25qb2ZwbDAwMnExMnVwOHlrc2JnMDA4In0.5jx8qYdXib2SEZh9VXpciw`
            )
            .then((response) => {
                console.log(response.data.features);
                setResults(response.data.features);
                setisLoading(false);
            });
    };
    const handleItemClicked = (place) => {
        setQuery(place.place_name);
        setResults([]);
        props.onSelect(place);
    };

    return (
        <div className="AutocompletePlace">
            <SearchCity
                value={query}
                onChange={handleQuery}
                showResult={props.weather}
            />

            <ul className="AutocompletePlace-results">
                {results.map((place) => (
                    <li
                        key={place.id}
                        className="AutocompletePlace-items"
                        onClick={() => handleItemClicked(place)}
                    >
                        {place.place_name}
                    </li>
                ))}
                {isLoading && (
                    <li className="AutocompletePlace-items">Loading...</li>
                )}
            </ul>
        </div>
    );
};

export default AutocompletePlace;

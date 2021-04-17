import React from "react";
import styled from "styled-components";
import styles from "../styles/Search.module.css";

const SearchBar = styled.form`
    top: ${({ showResult }) => (showResult ? "0%" : "30%")};
    position: fixed;
    margin: 0 auto;
    max-width: 50%;
    transition: 0.8s 0.5s;
    z-index: 999;
`;

const SearchCity = ({ submit, value, onChange, showResult }) => {
    return (
        <>
            {console.log(showResult)}
            <form
                className={styles.form}
                showResult={showResult}
                onSubmit={submit}
            >
                <input
                    className={styles.input}
                    type="text"
                    value={value}
                    placeholder="lawein?"
                    onChange={onChange}
                />
            </form>
        </>
    );
};

export default SearchCity;

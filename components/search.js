import React from "react";
import styled from "styled-components";
import styles from "../styles/Search.module.css";

const SearchBar = styled.form`
    top: ${({ showResult }) => (showResult ? "0%" : "30%")};
    position: relative;
    margin: 0 auto;
    max-width: 500px;
    transition: 0.8s 0.5s;
    z-index: 999;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    background-color: pink;
    font-size: 16px;
    padding: 10px 15px 10px 40px;
    color: #c5c5c5;
    transition: 0.2s;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    &:focus {
        color: #191919;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        outline: none;
    }
`;

const SearchCity = ({ submit, value, onChange, showResult }) => {
    return (
        <>
            {console.log(showResult)}
            <SearchBar showResult={showResult} onSubmit={submit}>
                <input
                    className={styles.input}
                    type="text"
                    value={value}
                    placeholder="lawein?"
                    onChange={onChange}
                />
            </SearchBar>
        </>
    );
};

export default SearchCity;

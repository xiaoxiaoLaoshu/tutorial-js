import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Country() {
    const [counrties, setCountries] = useState([]);
    const [showCountries, setShowCountries] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((resp) => {
            setCountries(resp.data);
        });
    }, []);
    const handleName = (event) => {
        setName(event?.target.value);
        const filterCountries = counrties.filter((v) => v.name.common.includes(event.target.value));
        // console.log(filterCountries);
        if (filterCountries.length > 10) {
            setShowCountries("Too many matches, specify another filter");
        } else {
            setShowCountries(filterCountries);
        }
    };
    return (
        counrties.length === 0 ? "loading" :
        <>
            filter country by <input value={name} onChange={handleName}></input>
            <ul>{Array.isArray(showCountries) ? showCountries.length != 1 ? showCountries.map((v) => <li key={v.area}>{v.name.common}</li>) : <>
                <h1>{showCountries[0].name.common}</h1>
                <p>capital {showCountries[0].capital[0]}</p>
                <p>area {showCountries[0].area}</p>
                <strong>languages：</strong>
                <ul>
                    {Object.values(showCountries[0].languages).map(v => <li>{v}</li>)}
                </ul>
                <img src={showCountries[0].flags.png}></img>
            </> : showCountries}</ul>
        </>
    );
}

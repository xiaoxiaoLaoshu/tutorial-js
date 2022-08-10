import React, { useState, useEffect } from "react";
import axios from "axios";

function Phone() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((resp) => {
            setPhones(resp.data);
        });
    }, []);
    return (
        <>
            <h1>phone list</h1>
            <ul>
                {phones?.map((v) => (
                    <li key={v.id}>
                        {v.name}： {v.number}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Phone;

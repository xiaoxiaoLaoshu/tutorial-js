import React, { useState, useEffect } from "react";
import phoneServer from "../apis/phone";
import "../phone.css"
function Phone() {
    const [phones, setPhones] = useState([]);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        phoneServer.getPhones().then((data) => {
            setPhones(data);
        });
    }, []);

    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeNumer = (event) => {
        setNumber(event.target.value);
    };

    const addNumber = () => {
        const newPhone = {
            name,
            number,
            important: Math.random() < 0.5,
            id: phones.length + 1,
        };
        const filterItem = phones.filter((v) => {
            return v.name === name;
        });
        if (filterItem.length === 1) {
            const flag = window.confirm(
                `${name} is already added to the phonebook,replace the old number with a new one`
            );
            if (flag) {
                phoneServer.putPhone(newPhone).then((data) => {
                    console.log(data);
                }).catch((err) => { console.log(err) });
            }
        } else {
            phoneServer.addPhone(newPhone).then(() => {
                setPhones(phones.concat(newPhone));
            });
        }
        setName("");
        setNumber("");
    };
    const deleteNumber = (id) => {
        const deletePhone = phones.find((v) => v.id === id);
        const flag = window.confirm(`Delete ${deletePhone.name}？`);
        if (flag) {
            phoneServer
                .deletePhone(id)
                .then(() => {
                    phoneServer.getPhones().then((data) => {
                        setPhones(data);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <>
            <h1>phone list</h1>
            <hr></hr>
            name: <input value={name} onChange={changeName}></input>
            number: <input value={number} onChange={changeNumer}></input>
            <button onClick={addNumber}>add</button>
            <hr></hr>
            <ul>
                {phones?.map((v) => (
                    <li key={v.id}>
                        {v.name}： {v.number}{" "}
                        <button
                            onClick={() => {
                                deleteNumber(v.id);
                            }}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Phone;

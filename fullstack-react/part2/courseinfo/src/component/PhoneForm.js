import React, { useState } from "react";

function PhoneForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameHolder, setNameHolder] = useState("");
    const [phoneHolder, setPhoneHolder] = useState("");
    const [phoneInfos, setPhoneInfos] = useState([]);
    const [filterPhone, setFilterPhone] = useState(false);
    const [showPhones, setShowPhones] = useState([]);
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleAddPhone = (event) => {
        event.preventDefault();
        if (!name || !phone) {
            if (!name) {
                setNameHolder("name is empty");
            }
            if (!phone) {
                setPhoneHolder("phone is empty");
            }
            return;
        }
        const phoneInfo = {
            name: name,
            phone: phone,
            important: Math.random() < 0.5,
            id: phoneInfos.length + 1,
        };
        const newPhoneInfos = phoneInfos.concat(phoneInfo);
        setName("");
        setPhone("");
        setNameHolder("");
        setPhoneHolder("");
        setPhoneInfos(newPhoneInfos);
        setShowPhones(newPhoneInfos);
    };
    const showImportant = () => {
      setFilterPhone(!filterPhone);
      if(filterPhone) {
        setShowPhones(phoneInfos.filter(v => v.important));
      } else {
        setShowPhones(phoneInfos);
      }
    }

    return (
        <>
            <button onClick={showImportant}>filter show all is importance phone</button>
            <p>add a phone</p>
            <form onSubmit={handleAddPhone}>
                <label htmlFor='name'>
                    name:
                    <input type={"text"} id='name' placeholder={nameHolder} onChange={handleChangeName} value={name} />
                </label>
                <label htmlFor='phone'>
                    phone:
                    <input type={"tel"} id='phone' placeholder={phoneHolder} onChange={handleChangePhone} value={phone} />
                </label>
                <button type='submit'>add</button>
            </form>
            <h1>Phone List</h1>
            <ul>
                {showPhones.map((v) => (
                    <li key={v.id}>
                        {v.name}：{v.phone}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PhoneForm;

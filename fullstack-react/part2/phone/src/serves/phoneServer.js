import axios from "axios";
const baseUrl = "http://localhost:3001/persons";
const getPhones = async () => {
    const response = await axios.get(baseUrl);
    return await response?.data;
};
const addPhone = async (newPhone) => {
    const response = await axios.post(baseUrl, newPhone);
    return response?.data;
};
const putPhone = async (newPhone) => {
    const response = await axios.put(baseUrl, newPhone);
    return response?.data;
};
const deletePhone = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response?.data
};

export default { addPhone, putPhone, getPhones, deletePhone };

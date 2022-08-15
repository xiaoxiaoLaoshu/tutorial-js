const express = require("express");
const morgan = require('morgan')
const app = express();
app.use(morgan("tiny"));
app.use(express.json()); // 用来解析 post 的 body 数据

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

app.get("/persons", (request, response) => {
    response.json(persons);
});

app.get("/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log(id);
    const person = persons.find((p) => p.id === id);
    if (!person) {
        response.status(400).end("Not find the id of people");
    } else {
        response.json(person);
    }
});

app.get("/info", (request, response) => {
    const personNumber = persons.length;
    response.send(`personbook has info for ${personNumber} people 
    ${new Date()}`);
});

app.delete("/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const personIndex = persons.findIndex((p) => p.id === id);
    if (personIndex === -1) {
        return response.status(400).end("You can't delete it that the id is not exist in the personBook.");
    } else {
        persons.splice(personIndex, 1);
        response.json(persons);
    }
});

app.post("/persons", (request, response) => {
    const data = request.body;
    if (!data?.name || !data.number) {
        return response.status(400).json({ error: "name is empty or number is empty." });
    }
    if (persons.find((p) => p.name === data.name)) {
        return response.status(400).json({ error: "name is unique" });
    }
    const maxId = Math.max(...persons.map((p) => p.id));
    const id = maxId + 1;
    const person = {
        ...data,
        id,
    };
    persons = persons.concat(person);
    response.json(persons);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running at port ${PORT}`);

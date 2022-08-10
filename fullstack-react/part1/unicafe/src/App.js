import Vote  from "./Vote.js";
import "./App.css";
const course = "Half Stack Application Development";

const part1 = "Fundamental of React";
const exercises1 = 7;
const part2 = "using props pass data";
const exercises2 = 5;
const part3 = "State of Component";
const exercises3 = 10;

// function App() {
//     return (
//         <>
//             <h1>{course}</h1>
//             <p>{part1} {exercises1}</p>
//             <p>{part2} {exercises2}</p>
//             <p>{part3} {exercises3}</p>
//             <p> Number total is {exercises1 + exercises2 + exercises3}</p>
//         </>
//     );
// }

function Header({ info }) {
    return <h1>{info}</h1>;
}

function Container({ part, exercises }) {
    return (
        <p>
            {part} {exercises}
        </p>
    );
}

function Footer({ info }) {
    return <p>Number of total is {info}</p>;
}

function App() {
    return (
        <>
            <Header info={course}></Header>
            <Container part={part1} exercises={exercises1}></Container>
            <Container part={part2} exercises={exercises2}></Container>
            <Container part={part3} exercises={exercises3}></Container>
            <Footer info={exercises1 + exercises2 + exercises3}></Footer>
            <Vote></Vote>
        </>
    );
}

export default App;

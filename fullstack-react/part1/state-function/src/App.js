import "./App.css";
import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const increaseByOne = () => setCounter(counter + 1);
    const minusByOne = () => setCounter(counter - 1);
    const resetToZero = () => setCounter(0);
    return (
        <p>
            <Button handler={increaseByOne} text='increaseByOne'></Button>
            {counter}
            <Button handler={minusByOne} text='minusByOne'></Button>
            <Button handler={resetToZero} text='resetToZeros'></Button>

        </p>
    );
};

// const Button = (props) => {
//     const handler = props.handler;
//     const text = props.text;
//     return <button onClick={handler}>{text}</button>;
// };
const Button = ({handler, text}) => {
  return <button onClick={handler}>{text}</button>
}

export default App;

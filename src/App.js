import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function useCounter(initial) {
    const [counter, setCounter] = useState(initial);

    const incCounter = () => {
        if (counter < 5) {
            setCounter((counter) => counter + 1);
        }
    };

    const decCounter = () => {
        if (counter > -5) {
            setCounter((counter) => counter - 1);
        }
    };

    const rndCounter = () => {
        setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0));
    };

    const resetCounter = () => {
        setCounter(initial);
    };

    return { counter, incCounter, decCounter, rndCounter, resetCounter };
}

const Counter = (props) => {
    // const [counter, setCounter] = useState(props.counter);

    const { counter, incCounter, decCounter, rndCounter, resetCounter } =
        useCounter(props.counter);

    // const rndCounter = () => {
    //   setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
    // }

    // const resetCounter = () => {
    //   setCounter(props.counter)
    // }

    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={incCounter}>INC</button>
                <button onClick={decCounter}>DEC</button>
                <button onClick={rndCounter}>RND</button>
                <button onClick={resetCounter}>RESET</button>
            </div>
        </div>
    );
};

const RndCounter = (props) => {
    // const [counter, setCounter] = useState(props.counter);

    // const rndCounter = () => {
    //   setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
    // }

    // const resetCounter = () => {
    //   setCounter(props.counter)
    // }

    const { counter, rndCounter, resetCounter } = useCounter(props.counter);

    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={rndCounter}>RND</button>
                <button onClick={resetCounter}>RESET</button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
            <Counter counter={0} />
            <RndCounter counter={5} />
        </>
    );
};

export default App;

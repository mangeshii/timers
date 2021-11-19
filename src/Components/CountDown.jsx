import "./CountDown.css";
import { useState, useRef } from "react";

const CountDown = () => {
    const [initialState, setInitialSet] = useState(0);
    const countRef = useRef(null);

    const handleStart = (event) => {
        event.preventDefault();
        countRef.current = setInterval(() => {
            setInitialSet((cd) => cd - 1);
        }, 1000);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
    };

    const handleReset = () => {
        clearInterval(countRef.current);
        setInitialSet(0);
    };

    if (initialState < 0) {
        handleReset();
    }

    const handleInputChange = (event) => {
        setInitialSet(event.target.value);
    };

    const formatTime = () => {
        const getSeconds = `0${initialState % 60}`.slice(-2);
        console.log(getSeconds);
        const minutes = `${Math.floor(initialState / 60)}`;
        console.log(minutes);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        console.log(getMinutes);
        const getHours = `0${Math.floor(initialState / 3600)}`.slice(-2);
        console.log(getHours);

        return `${getHours} : ${getMinutes} : ${getSeconds} `;
    };

    return (
        <div className="countdown-wrapper">
            <div className="inner-container">
                <div className="counter">
                    <h1>{formatTime()}</h1>
                </div>
                <form  onSubmit={handleStart}>
                    <input
                        type="text"
                        placeholder="enter time in seconds"
                        onChange={handleInputChange}
                    />
                    <button className="start" type="submit">Start</button>
                </form>


                <div className="btns">
                    {/* <button onClick={handleStart}>start</button> */}
                    <button onClick={handlePause}>Pause</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};
export default CountDown;

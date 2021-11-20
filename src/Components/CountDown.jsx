import "./CountDown.css";
import { useState, useRef } from "react";
import stopwatch from "../Images/stopwatch.png";
import { Link } from "react-router-dom";

const CountDown = () => {
    const [initialState, setInitialSet] = useState(0);
    const [isPaused, setPause] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setPause(true)
        countRef.current = setInterval(() => {
            setInitialSet((cd) => cd - 1);
        }, 1000);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
        setPause(false);
    };

    const handleReset = () => {
        clearInterval(countRef.current);
        setInitialSet(0);
        setPause(false);
    };

    if (initialState < 0) {
        handleReset();
    }

    const handleInputChange = (event) => {
        setInitialSet(event.target.value);
    };

    const formatTimeCD = () => {
        const getSecond = `0${initialState % 60}`.slice(-2);
        const minutes = `${Math.floor(initialState / 60)}`;
        const getMinute = `0${minutes % 60}`.slice(-2);
        const getHour = `0${Math.floor(initialState / 3600)}`.slice(-2);

        return `${getHour} : ${getMinute} : ${getSecond} `;
    };

    return (
        <>
            <div className="countdown">
                <div className="navbar">
                    <ul>
                        <Link to="/">
                            <li>
                                <img src={stopwatch} alt="stopwatch" />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="countdown-wrapper">
                    <div className="inner-container">
                        <div className="counter-cd">
                            <h1>{formatTimeCD()}</h1>
                        </div>
                        <input
                            type="text"
                            placeholder="enter time in seconds"
                            onChange={handleInputChange}
                        />

                        <div className="btns">
                            {!isPaused ? (
                                <button className="start cd-btns" type="text" onClick={handleStart}>
                                    Start
                                </button>
                            ) : (
                                <button
                                    className="cd-btns"
                                    onClick={handlePause}
                                >
                                    Pause
                                </button>
                            )}
                            <button className="cd-btns" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CountDown;

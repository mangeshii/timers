import { useState, useRef } from "react";
import "./Stopwatch.css";
import countdown from "../Images/countdown.png";
import { Link } from "react-router-dom";

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setPause] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setPause(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 10);
        }, 10);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
        setPause(false);
    };

    const handleReset = () => {
        clearInterval(countRef.current);
        setPause(false);
        setTimer(0);
    };

    return (
        <>
            <div className="stopwatch">
                <div className="navbar">
                    <ul>
                        <Link to="/countdown">
                            <li>
                                <img src={countdown} alt="countdown" />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="counter">
                            <h1 className="count">
                                {`0${Math.floor(timer / 3600000) % 60}`.slice(
                                    -2
                                )}
                            </h1>
                            <h1 className="colon">:</h1>
                            <h1 className="count">
                                {`0${Math.floor(timer / 60000) % 60}`.slice(-2)}
                            </h1>
                            <h1 className="colon">:</h1>
                            <h1 className="count">
                                {`0${Math.floor(timer / 1000) % 60}`.slice(-2)}
                            </h1>
                            <h1 className="colon">:</h1>
                            <h1 className="count">
                                {`0${Math.floor(timer / 10) % 100}`.slice(-2)}
                            </h1>
                        </div>
                    </div>
                    <div className="buttons">
                        {!isPaused ? (
                            <button className="btn" onClick={handleStart}>
                                Start
                            </button>
                        ) : (
                            <button className="btn" onClick={handlePause}>
                                Pause
                            </button>
                        )}
                        <button className="btn" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StopWatch;

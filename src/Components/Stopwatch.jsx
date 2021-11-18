import { useState, useRef } from "react";
import "./Stopwatch.css";

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setPause] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setPause(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
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

    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="overlap-box">
                    <div className="counter">
                        <h1>{formatTime()}</h1>
                    </div>
                    <div className="buttons">
                        {!isPaused ? (
                            <button className="btn" onClick={handleStart}>Start</button>
                        ) : (
                            <button className="btn" onClick={handlePause}>Pause</button>
                        )}
                        <button className="btn" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;

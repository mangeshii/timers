import { useState, useRef } from "react";

const CountDown = () => {
    const [initialState, setInitialSet] = useState();
    const [isPaused, setPause] = useState(false);
    const countRef = useRef(null);

    const countDown = () => {
        countRef.current = setInterval(() => {
            setInitialSet((cd) => cd - 1);
        }, 1000);
    };

    const handleChange = (event) => {
        setInitialSet(event.target.value);
    };
    const handlePause = () => {
        clearInterval(countRef.current);
        setPause(true);
    };
    // eslint-disable-next-line
    {
        initialState === 0 && clearInterval(countRef.current);
    }
    return (
        <>
            <div className="counter">{initialState}</div>
            <input type="text" onChange={handleChange} />
            <button onClick={countDown}>start</button>
            <button onClick={handlePause}>Pause</button>
        </>
    );
};
export default CountDown;

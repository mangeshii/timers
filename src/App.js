import StopWatch from "./Components/Stopwatch";
import CountDown from "./Components/CountDown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>


            <Router>
                <Routes>
                    <Route exact path="/" element={<StopWatch />} />
                    <Route exact path="/countdown" element={<CountDown />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

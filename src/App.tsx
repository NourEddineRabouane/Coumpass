import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1 min-h-[428px] flex ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

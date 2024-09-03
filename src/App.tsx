import { useState } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
          <Header />
          <Routes >
            <Route  path="/" element={<Home/>} />
            <Route  path="/search" element={<Search/>} />
          </Routes>
        </Router>
    );
}

export default App;

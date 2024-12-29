
import React from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import SuccessPage from "./SuccessPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<formPage />} />
                <Route path="/success" element={<sucsessPage />} />
            </Routes>
        </Router>
    );
}

export default App;

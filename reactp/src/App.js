
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import FormPage from "./formPage";
import SuccessPage from "./sucsessPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormPage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Perform any validation or API call here if needed
        
        console.log("Form submitted");
        navigate("/success"); // Navigate to the success page
    };
    return (
        <div>
            <h1>Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default FormPage;

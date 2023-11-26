import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import { useNavigate } from 'react-router-dom';
import './css/Contact.css'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="div_contact flex-row center">
         <h1>Contact</h1>
         <button onClick={() => navigate('/') } >Go to Home</button>
        </div>
        );
}

export default Contact
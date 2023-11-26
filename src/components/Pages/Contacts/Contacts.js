import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
         <h1>Contact</h1>
         <button onClick={() => navigate('/') } >Go to Home</button>
        </>
        );
}

export default Contact
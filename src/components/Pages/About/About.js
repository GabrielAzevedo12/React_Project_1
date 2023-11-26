import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import { redirect as Redirect, useParams,  useNavigate } from "react-router-dom";

//<Redirect to="/" />
/*
  <>
          { name !== 'John Doe' ? <Redirect to="/" /> : null }
          <h1>About { name }</h1>
        </>
 */
const About = ({ name }) => {
    const navigate = useNavigate();
    return (
        <>
          <h1>About { name }</h1>
        </>
        );
}

export default About
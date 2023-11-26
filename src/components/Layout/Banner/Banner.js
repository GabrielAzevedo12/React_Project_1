import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Banner.css';
import { esconder, exibir } from "../../funçoes/funçoes";
import Banner1 from "./components/Banner1/Banner1";
import Banner2 from "./components/Banner2/Banner2";
import Banner3 from "./components/Banner3/Banner3";
import Banner4 from "./components/Banner4/Banner4";

const Banner = () => { 
    return ( 
          <div className="Banner_Container">
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
          </div>
        );
}

export default Banner
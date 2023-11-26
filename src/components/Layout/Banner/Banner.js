import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Banner.css';
import './css/BannerBlank.css'
import { esconder, exibir } from "../../funçoes/funçoes";
import Banner1 from "./components/Banner1/Banner1";
import Banner2 from "./components/Banner2/Banner2";
import Banner3 from "./components/Banner3/Banner3";
import Banner4 from "./components/Banner4/Banner4";
import Banner5 from "./components/Banner5/Banner5";
import BannerGeral from "./BannerGeral/BannerGeral";

const Banner = () => { 
    return ( 
          <div className="Banner_Container Banner">
            <BannerGeral className="BannerBlank_Container BannerBlank"></BannerGeral>
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
          </div>
        );
}
/*
<BannerGeral className="Banner_Container Banner">
  <BannerGeral className="Banner1_Container Banner1">
  <BannerGeral className="Banner2_Container Banner2">
  <BannerGeral className="Banner3_Container Banner3">
  <BannerGeral className="Banner4_Container Banner4">
</BannerGeral>
 */
export default Banner
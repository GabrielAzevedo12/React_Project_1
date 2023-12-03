import React from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Banner.css';
import './css/BannerBlank.css'
import Banner1 from "./components/Banner1/Banner1";
import Banner2 from "./components/Banner2/Banner2";
import Banner3 from "./components/Banner3/Banner3";
import Banner4 from "./components/Banner4/Banner4";
import Banner5 from "./components/Banner5/Banner5";
import BannerGeral from "./BannerGeral/BannerGeral";
import styled from "styled-components";

const Banner = () => { 
  const Banner = styled.div`
  @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-areas:
      'BannerBlank BannerBlank BannerBlank BannerBlank BannerBlank BannerBlank'
      'Banner1 Banner1 Banner1 Banner1 Banner1 Banner1'
      'Banner3 Banner2 Banner2 Banner2 Banner2 Banner2'
      'Banner3 Banner4 Banner4 Banner4 Banner4 Banner4'
      'Banner5 Banner4 Banner4 Banner4 Banner4 Banner4';
      gap: 10px;
      padding: 10px;
    }`

    return ( 
      <Banner>
            <BannerGeral BannerName="BannerBlank" />
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
      </Banner>
        );
}

/*

<div className="Banner_Container Banner">
            <BannerGeral BannerName="BannerBlank" />
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
          </div>

<BannerGeral className="Banner_Container Banner">
  <BannerGeral className="Banner1_Container Banner1">
  <BannerGeral className="Banner2_Container Banner2">
  <BannerGeral className="Banner3_Container Banner3">
  <BannerGeral className="Banner4_Container Banner4">
</BannerGeral>

<div className="Banner_Container Banner">
            <BannerGeral className="BannerBlank_Container BannerBlank"/>
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            <Banner5/>
          </div>
 */

export default Banner
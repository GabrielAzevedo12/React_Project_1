import React, { Fragment } from "react";
import './css/Banner4.css';
import SubBanner from "../../subBanner/subBanner";

const Banner4 = () => { 
    return ( 
          <div className="Banner4_Container Banner Banner4">
            <SubBanner BannerPai="Banner4" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner4" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner4" indexItem={3} className=""/>
          </div>
        );
}

export default Banner4
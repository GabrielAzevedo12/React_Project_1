import React, { Fragment } from "react";
import './css/Banner2.css';
import SubBanner from "../../subBanner/subBanner";

const Banner2 = () => { 
    return ( 
          <div className="Banner2_Container Banner Banner2">
            <SubBanner BannerPai="Banner2" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner2" indexItem={3} className=""/>
          </div>
        );
}

export default Banner2
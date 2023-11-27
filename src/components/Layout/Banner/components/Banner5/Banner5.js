import React, { Fragment } from "react";
import './css/Banner5.css';
import SubBanner from "../../subBanner/subBanner";

const Banner5 = () => { 
    return ( 
          <div className="Banner5_Container Banner Banner5">
            <SubBanner BannerPai="Banner5" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner5" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner5" indexItem={3} className=""/>
          </div>
        );
}

export default Banner5
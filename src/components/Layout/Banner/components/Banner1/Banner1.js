import React, { Fragment } from "react";
import './css/Banner1.css';
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
import './css/Banner1_Container_subBanner1.css'
import './css/Banner1_Container_subBanner2.css'
import './css/Banner1_Container_subBanner3.css'

const Banner1 = () => { 
  /*
   <BannerGeral className="Banner1_Container_subBanner1 Banner1_subBanner1 subBanner" />
   <BannerGeral className="Banner1_Container_subBanner2 Banner1_subBanner2 subBanner" />
   <BannerGeral className="Banner1_Container_subBanner3 Banner1_subBanner3 subBanner" />
  */
    return ( 
          <div className="Banner1_Container Banner Banner1 flex-row flex-nowrap">
            <SubBanner BannerPai="Banner1" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner1" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner1" indexItem={3} className=""/>
          </div>
        );
}

export default Banner1
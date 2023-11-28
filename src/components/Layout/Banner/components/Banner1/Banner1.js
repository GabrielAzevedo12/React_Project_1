import React from "react";
import './css/Banner1.css';
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const Banner1 = () => { 
  /*
   <BannerGeral className="Banner1_subBanner1 Banner1_subBanner1 subBanner" />
   <BannerGeral className="Banner1_subBanner2 Banner1_subBanner2 subBanner" />
   <BannerGeral className="Banner1_subBanner3 Banner1_subBanner3 subBanner" />

   <div className="Banner1 Banner Banner1 flex-row flex-nowrap">
            <SubBanner BannerPai="Banner1" indexItem={1} className=""/>
            <SubBanner BannerPai="Banner1" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner1" indexItem={3} className=""/>
          </div>
  */
    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <SubBanner BannerPai="Banner1" indexItem={1} className=""/>
        <SubBanner BannerPai="Banner1" indexItem={2} className=""/>
        <SubBanner BannerPai="Banner1" indexItem={3} className=""/>
      </BannerGeral> 
        );
}

export default Banner1
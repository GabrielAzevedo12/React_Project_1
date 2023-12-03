import React from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
//import Text from "../../../Text/Text";
import StyledText from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const Banner1 = () => { 
  
    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <SubBanner BannerPai="Banner1" indexItem={1} className="center">
            <StyledText TextName="subBanner1_Text" typeText="h1"> 
              <AiOutlineLoading/>
            </StyledText>
        </SubBanner>
        <SubBanner BannerPai="Banner1" indexItem={2} className=""/>
        <SubBanner BannerPai="Banner1" indexItem={3} className=""/>
      </BannerGeral> 
        );
}

export default Banner1
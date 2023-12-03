import React, { useState } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
//import Text from "../../../Text/Text";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import styled, {keyframes} from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const Banner1 = () => { 

  const [loadText, setloadText] = useState(false);
  setTimeout(() => {
    setloadText(true)
  }, 10000);
   // Create the keyframes
   const rotate = keyframes`
   from {
   transform: rotate(0deg);
   }

   to {
   transform: rotate(360deg);
   }
   `;

   const StyledText = styled(Text)`
   display: inline-block;
   animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
   padding: 2rem 1rem;
   font-size: 1.2rem;
   `;

    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <SubBanner BannerPai="Banner1" indexItem={1} className="center">
        {
                loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </SubBanner>
        <SubBanner BannerPai="Banner1" indexItem={2} className=""/>
        <SubBanner BannerPai="Banner1" indexItem={3} className=""/>
      </BannerGeral> 
        );
}

export default Banner1
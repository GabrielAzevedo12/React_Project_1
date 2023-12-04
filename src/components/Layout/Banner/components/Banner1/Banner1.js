import React, { useState } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
//import Text from "../../../Text/Text";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import { MovLeft_subBanner } from "./css/MovLeft_subBanner.css.js"
import styled, {keyframes} from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const Banner1 = () => { 

  const [OverSubBanner, setOverSubBanner] = useState(false);
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
   position: relative;
   animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
   padding: 2rem 1rem;
   font-size: 1.2rem;
   `;

   let StyledSubBanner;

   OverSubBanner ? 

   StyledSubBanner = styled(SubBanner)`
   position: relative;
   animation: unset ;
   ` :
   
   StyledSubBanner = styled(SubBanner)`
   position: relative;
   animation: ${MovLeft_subBanner} 90s cubic-bezier(.79,2.01,.83,.67) infinite ;
   `

    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <StyledSubBanner BannerPai="Banner1" indexItem={1} className="center" OverSubBanner={OverSubBanner} onMouseOver={() => setOverSubBanner(true)}>
        {
                loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 1
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner BannerPai="Banner1" indexItem={2} className="" OverSubBanner={OverSubBanner} onMouseOver={() => setOverSubBanner(true)}>
        {
                loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 2
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner BannerPai="Banner1" indexItem={3} className="" OverSubBanner={OverSubBanner} onMouseOver={() => setOverSubBanner(true)}>
        {
                loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 3
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
      </BannerGeral> 
        );
}

export default Banner1
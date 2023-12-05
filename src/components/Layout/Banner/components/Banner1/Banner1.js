import React, { useReducer, useState } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
//import Text from "../../../Text/Text";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import { MovLeft_subBanner } from "./css/MovLeft_subBanner.css.js"
import { rotate } from "./css/rotate.css.js"
import styled, {keyframes} from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const reducer = (stateAtual, stateUp) => {
  return { ...stateAtual, ...stateUp }
}
const Banner1 = () => { 

  const [states, updateStates ] = useReducer(reducer, {
    subBanner1_left: false,
    subBanner2_left: false,
    subBanner3_left: false,
    OverSubBanner: false,
    loadText: false
  })

  setTimeout(() => {
    updateStates({ loadText: true })
  }, 5000);

   const StyledText = styled(Text)`
   position: relative;
   animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
   padding: 2rem 1rem;
   font-size: 1.2rem;
   `;

   let StyledSubBanner;

   states.OverSubBanner ? 

   StyledSubBanner = styled(SubBanner)`
   position: relative;
   ` :
   
   StyledSubBanner = styled(SubBanner)`
   position: relative;
   animation: ${MovLeft_subBanner} 90s cubic-bezier(.79,2.01,.83,.67) infinite ;
   `
   const SubBanner_onMouseOver = (e) => {
    for ( const element of e.target.parentElement.childNodes) {
    var
    d_e = element.getBoundingClientRect(),
    d_p = element.parentElement.getBoundingClientRect() ;
    element.style.left = (d_p.x - d_e.x) + "px" ;

    }
    updateStates({OverSubBanner: true})
   }

    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <StyledSubBanner BannerPai="Banner1" indexItem={1} className="center" onMouseOver={SubBanner_onMouseOver}>
        {
                states.loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 1
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner BannerPai="Banner1" indexItem={2} className="" onMouseOver={SubBanner_onMouseOver}>
        {
                states.loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 2
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner BannerPai="Banner1" indexItem={3} className="" onMouseOver={SubBanner_onMouseOver}>
        {
                states.loadText ?
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
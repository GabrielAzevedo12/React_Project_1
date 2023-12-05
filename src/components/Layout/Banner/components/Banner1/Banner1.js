import React, { useReducer } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import { MovLeft_subBanner } from "./css/MovLeft_subBanner.css.js"
import { rotate } from "./css/rotate.css.js"
import styled, { css } from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'

const reducer = (stateAtual, stateUp) => {
  return { ...stateAtual, ...stateUp }
}

let StyledSubBanner = 
  styled(SubBanner)`
  position: relative;
  animation:
  ${
  props => props.animation && !props.OverSubBanner ? 
  css`${props.animation} 90s linear infinite ;` :
  `` 
  }
  `

const StyledText = styled(Text)`
  position: relative;
  animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
  `;

const Banner1 = () => { 

  const [states, updateStates ] = useReducer(reducer, {
    subBanner1_left: false,
    subBanner2_left: false,
    subBanner3_left: false,
    subBanner_animation: MovLeft_subBanner,
    OverSubBanner: false,
    loadText: false
  })

  setTimeout(() => {
    updateStates({ loadText: true })
  }, 5000);

   /*animation: ${MovLeft_subBanner} 90s cubic-bezier(.79,2.01,.83,.67) infinite ;*/
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
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={1} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}>
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
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={2} 
        className="" 
        onMouseOver={SubBanner_onMouseOver} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}>
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
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={3} 
        className="" 
        onMouseOver={SubBanner_onMouseOver} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}>
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
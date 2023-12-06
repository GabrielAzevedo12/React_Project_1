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
import { $ } from "../../../../funçoes/funçoes.js";

const reducer = (stateAtual, stateUp) => {
  return { ...stateAtual, ...stateUp }
}

let StyledSubBanner = 
  styled(SubBanner)`
  position: relative;
  ${
  props => props.animation && !props.OverSubBanner ? 
  css`animation: ${MovLeft_subBanner} 90s linear infinite ;` :
  css`left: ${props.left}` 
  }
  `

const StyledText = styled(Text)`
  position: relative;
  animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
  `;

const Banner1 = () => { 

  const [states, updateStates ] = useReducer(reducer, {
    posiçaoInicial_subBanner3: false,
    posiçaoInicial_subBanner2: false,
    posiçaoInicial_subBanner1: false,
    posiçaoAtual_subBanner1: false,
    posiçaoAtual_subBanner2: false,
    posiçaoAtual_subBanner3: false,
    subBanner_animation: false,
    OverSubBanner: false,
    loadText: false
  })

  setTimeout(() => {
    updateStates({ loadText: true, subBanner_animation: true })
  }, 5000);

  window.addEventListener("load",() => {
    var i = 1;
    for ( const element of $("#Banner1").childNodes) {
      var
      d_e = element.getBoundingClientRect();
      states["posiçaoInicial_subBanner"+i] = d_e.x ;
      i++;
      }   
    console.log(states);  
  })
   /*animation: ${MovLeft_subBanner} 90s cubic-bezier(.79,2.01,.83,.67) infinite ;*/
   const SubBanner_onMouseOver = (e) => {
    var i = 1;
    for ( const element of $("#Banner1").childNodes) {
    var d_e = element.getBoundingClientRect();
    states["posiçaoAtual_subBanner"+i] = (states["posiçaoInicial_subBanner"+i] - d_e.x) + "px" ;
    i++;
    }
    console.log(states);  
    updateStates({OverSubBanner: true})
   }

   const SubBanner_onMouseOut = (e) => {
    updateStates({OverSubBanner: false})
   }

    return (
      <BannerGeral BannerName="Banner1" className="flex-row flex-nowrap">
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={1} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner1}>
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
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner2}>
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
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner3}>
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
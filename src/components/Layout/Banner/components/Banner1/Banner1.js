import React, { useReducer } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import { MovLeft_subBanner_posiçaoAtual } from "./css/MovLeft_subBanner.css.js"
import { Animation_Banner1_AlterarDimensoes } from "./css/Animation_Banner1_AlterarDimensoes.css.js";
import { rotate } from "./css/rotate.css.js"
import styled, { css, keyframes } from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'
import { $ } from "../../../../funçoes/funçoes.js";

// Animaçoes
// useReducer
const reducer = (stateAtual, stateUp) => {
  return { ...stateAtual, ...stateUp }
}

// Estilos
const StyledBanner1 = styled(BannerGeral)`
grid-area: Banner1;
min-width: 100vw;
max-width: 100vw;
--widthBanner1: 100vw;
min-height: 30vh;
--heightBanner1: 70vh;
height: var(--heightBanner1) ;
background-color: rgb(43, 32, 53);
z-index: 10;

&:hover { 
  ${ 
     props => props.OverSubBanner ?
     css`
     animation: ${ Animation_Banner1_AlterarDimensoes(props.HeightAtual + "px", `calc(var(--heightBanner1) + 10vh)` ) } 1s linear ;
     height: calc(var(--heightBanner1) + 10vh) ;
     ` :
     ""
    }
}
    `,

StyledSubBanner = 
  styled(SubBanner)`
  position: relative;
  background-color: rgb(149, 129, 168);
  ${
  props => props.animation && !props.OverSubBanner ? 
  css`animation: ${MovLeft_subBanner_posiçaoAtual(props.left)} 90s linear infinite ;` :
  css`left: ${props.left}` 
  }
  `,

StyledText = styled(Text)`
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
    HeightAtual_subBanner1: undefined,
    HeightAtual_subBanner2: undefined,
    HeightAtual_subBanner3: undefined,
    HeightAtual_Banner1: undefined,
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
     //states["Height_subBanner"+i] = d_e.height ;
      i++;
      }   
    states.HeightAtual_Banner1 = parseInt( $("#Banner1").getBoundingClientRect().height ) ;
  })
   /*animation: ${MovLeft_subBanner} 90s cubic-bezier(.79,2.01,.83,.67) infinite ;*/
   const SubBanner_onMouseOver = (e) => {
    var i = 1;
    for ( const element of $("#Banner1").childNodes) {
    var d_e = element.getBoundingClientRect();
    states["posiçaoAtual_subBanner"+i] = ( d_e.x - states["posiçaoInicial_subBanner"+i] ) + "px" ;
    //states["Height_subBanner"+i] = d_e.height ;
    i++;
    }
    updateStates({OverSubBanner: true});
    states.HeightAtual_Banner1 = parseInt( $("#Banner1").getBoundingClientRect().height );
   }

   const SubBanner_onMouseOut = (e) => {
    updateStates({OverSubBanner: false})
   }

    return (
        <StyledBanner1 
        BannerName="Banner1"
        className="flex-row flex-nowrap"
        HeightAtual={states.HeightAtual_Banner1}
        OverSubBanner={states.OverSubBanner}>
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={1} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner1}
        HeightAtual={states.HeightAtual_subBanner1}>
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
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner2}
        HeightAtual={states.HeightAtual_subBanner2}>
        {
                states.loadText ?
                <Text TextName="subBanner2_Text" typeText="h1"> 
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
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner3}
        HeightAtual={states.HeightAtual_subBanner3}>
        {
                states.loadText ?
                <Text TextName="subBanner3_Text" typeText="h1"> 
                subBannner 3
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
      </StyledBanner1>  
      
        );
}

export default Banner1
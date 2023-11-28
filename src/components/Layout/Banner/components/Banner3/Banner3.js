import React from "react";
import './css/Banner3.css';
import SubBanner from "../../subBanner/subBanner";
import { Teste_Mover_Animation_plano_xy } from "../../../../funçoes/Animation_plano_xy";
import BannerGeral from "../../BannerGeral/BannerGeral"; 

const Banner3 = () => { 
  /*
  <SubBanner BannerPai="Banner3" indexItem={1} className="" onClick={() => {
              Teste_Mover_Animation_plano_xy()
            }}/>
            <SubBanner BannerPai="Banner3" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner3" indexItem={3} className=""/>
   */
    return ( 
          <BannerGeral BannerName="Banner3">
            <SubBanner BannerPai="Banner3" indexItem={1} className="" onClick={() => {
              Teste_Mover_Animation_plano_xy()
            }}/>
            <SubBanner BannerPai="Banner3" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner3" indexItem={3} className=""/>
          </BannerGeral>
        );
}

export default Banner3
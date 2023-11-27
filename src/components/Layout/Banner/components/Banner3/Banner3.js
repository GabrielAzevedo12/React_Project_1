import React, { Fragment } from "react";
import './css/Banner3.css';
import SubBanner from "../../subBanner/subBanner";
import { Teste_Animation_plano_xy } from "../../../../funçoes/Animation_plano_xy";

const Banner3 = () => { 
    return ( 
          <div className="Banner3_Container Banner Banner3">
            <SubBanner BannerPai="Banner3" indexItem={1} className="" onClick={() => {
              Teste_Animation_plano_xy()
            }}/>
            <SubBanner BannerPai="Banner3" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner3" indexItem={3} className=""/>
          </div>
        );
}

export default Banner3
import React, { Fragment } from "react";
import './css/Banner3.css';
import SubBanner from "../../subBanner/subBanner";
import { Mover_Animation_plano_xy } from "../../../../funçoes/Mover_Animation_plano_xy"; 
import { $ } from "../../../../funçoes/funçoes"
import { Deslocar_plano_xy } from "../../../../funçoes/Deslocar_plano_xy";
import { posiçaoRelativa_x as posiçaoAtual_x } from "../../../../funçoes/posiçao_relativa_x";

const Banner3 = () => { 

  const Teste_Mover_Animation_plano_xy = () => {
    const sucessor_n = (n) => ( n+1 );
    const dobro_n_negativo = (n) => ( n*0 );
    
    Mover_Animation_plano_xy($(".Banner3_Container"),
    500,
    sucessor_n,
    dobro_n_negativo,
    Deslocar_plano_xy)

  }

    return ( 
          <div className="Banner3_Container Banner Banner3">
            <SubBanner BannerPai="Banner3" indexItem={1} className="" onClick={() => {
              Teste_Mover_Animation_plano_xy()
            }}/>
            <SubBanner BannerPai="Banner3" indexItem={2} className=""/>
            <SubBanner BannerPai="Banner3" indexItem={3} className=""/>
          </div>
        );
}

export default Banner3
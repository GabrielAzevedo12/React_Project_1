import { posiçaoRelativa_x as posiçaoAtual_x } from './posiçao_relativa_x.js';
import { posiçaoRelativa_y as posiçaoAtual_y } from './posiçao_relativa_y.js';
//import { Mover_Animation_plano_xy } from "./Mover_Animation_plano_xy"; 
import { $, sucessor_n, indentidade_negativo, incrementar_dimensoes, indentidade, quadrado, nothing } from "./funçoes"
import { Deslocar_plano_xy } from "./Deslocar_plano_xy";
import { cat_h } from './cat_h.js';
import { cat_w } from './cat_w.js';
import { cat_scrollx } from "./cat_scrollx.js"
import { cat_scrolly } from "./cat_scrolly.js"
import { Scroll_xy } from "./Scroll.js"
import { genKey } from './genRandomKey.js';

//import { posiçaoRelativa_x as posiçaoAtual_x } from "./posiçao_relativa_x";

let Animation_plano_xy = (elemento, limite, referencia_x, referencia_y, transformarx, transformary, Action_in_xy, Interval_for_Action) => {

    let x = referencia_x(elemento);
    let y = referencia_y(elemento);
    let condiçao = x >= limite ;
    
    // const Interval_for_Action = setInterval(exe,10);

    console.log(condiçao, x)

    if (condiçao) {

        clearInterval(Interval_for_Action);

    } else {

        x = transformarx(x);
        y = transformary(x);
        Action_in_xy(elemento, x, y);

    }
    
},

Mover_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {


        const Interval_for_Action_1 = setInterval(() => {
            Animation_plano_xy(
                elemento,
                limite,
                posiçaoAtual_x,
                posiçaoAtual_y, 
                transformarx,
                transformary,
                Deslocar_plano_xy,
                Interval_for_Action_1)
            },10);
        
          },

Expandir_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {

        const Interval_for_Action_1 = setInterval(() => {
            Animation_plano_xy(
                elemento,
                limite,
                cat_w,
                cat_h, 
                transformarx,
                transformary,
                incrementar_dimensoes,
                Interval_for_Action_1)
            },10);
        
},

Scroll_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {

    const Interval_for_Action_1 = setInterval(() => {
        Animation_plano_xy(
            elemento,
            limite,
            cat_scrollx,
            cat_scrolly, 
            transformarx,
            transformary,
            Scroll_xy,
            Interval_for_Action_1)
        },10);
    
}  ;
    

const Teste_Mover_Animation_plano_xy = () => {
    
/*
    const Interval_for_Action_1 = setInterval(() => {
    Mover_Animation_plano_xy($(".Banner3_Container"),
    5,
    sucessor_n,
    quadrado,
    Deslocar_plano_xy,
    Interval_for_Action_1)
    },10);

    Mover_Animation_plano_xy($(".Banner3_Container"),
    10,
    sucessor_n,
    quadrado)

    Expandir_Animation_plano_xy($(".Banner3_Container"),
    10,
    sucessor_n,
    indentidade)

*/

console.log( genKey(50) );

Scroll_Animation_plano_xy(
    $(".Banner1_Container"),
    200,
    sucessor_n,
    nothing)

  }

/*
let Interval_for_Action = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);

Deslocar_plano_xy(elemento, x, y);    

const Teste_Mover_Animation_plano_xy = () => {
    const sucessor_n = (n) => ( n+1 );
    const dobro_n = (n) => ( n*2 );
    Mover_Animation_plano_xy($(".Banner3_Container"), 500, sucessor_n, dobro_n, Deslocar_plano_xy)
}

 */

export { Mover_Animation_plano_xy, Teste_Mover_Animation_plano_xy }
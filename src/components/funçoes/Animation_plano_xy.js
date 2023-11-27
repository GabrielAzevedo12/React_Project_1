import { posiçaoRelativa_x as posiçaoAtual_x } from './posiçao_relativa_x.js';
import { posiçaoRelativa_y as posiçaoAtual_y } from './posiçao_relativa_y.js';
//import { Animation_plano_xy } from "./Animation_plano_xy"; 
import { $, sucessor_n, indentidade_negativo, incrementar_dimensoes, indentidade, quadrado } from "./funçoes.js"
import { Deslocar_plano_xy } from "./Deslocar_plano_xy.js";
//import { posiçaoRelativa_x as posiçaoAtual_x } from "./posiçao_relativa_x";

let Animation_plano_xy = (elemento, limite, transformarx, transformary, Action_in_xy, Interval_for_Action) => {

    let x = posiçaoAtual_x(elemento);
    let y = posiçaoAtual_y(elemento);
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
    
}

const Teste_Animation_plano_xy = () => {
    
/*
    const Interval_for_Action_1 = setInterval(() => {
    Animation_plano_xy($(".Banner3_Container"),
    5,
    sucessor_n,
    quadrado,
    Deslocar_plano_xy,
    Interval_for_Action_1)
    },10);
    */

    const Interval_for_Action_2 = setInterval(() => {
    Animation_plano_xy($(".Banner3_Container"),
    10,
    sucessor_n,
    indentidade,
    incrementar_dimensoes,
    Interval_for_Action_2)
    },10);

  }

/*
let Interval_for_Action = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);

Deslocar_plano_xy(elemento, x, y);    

const Teste_Animation_plano_xy = () => {
    const sucessor_n = (n) => ( n+1 );
    const dobro_n = (n) => ( n*2 );
    Animation_plano_xy($(".Banner3_Container"), 500, sucessor_n, dobro_n, Deslocar_plano_xy)
}

 */

export { Animation_plano_xy, Teste_Animation_plano_xy }
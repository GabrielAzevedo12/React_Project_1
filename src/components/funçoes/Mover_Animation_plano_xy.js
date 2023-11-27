import { posiçaoRelativa_x as posiçaoAtual_x } from './posiçao_relativa_x.js';
import { posiçaoRelativa_y as posiçaoAtual_y } from './posiçao_relativa_y.js';

let Mover_Animation_plano_xy = (elemento, limite, transformarx, transformary, Action_in_xy) => {

    let x = posiçaoAtual_x(elemento);
    let y = posiçaoAtual_y(elemento);
    let condiçao = x >= limite ;
    
    let Interval_for_Action = setInterval(() => {
        Mover_Animation_plano_xy(elemento, limite, transformarx, transformary, Action_in_xy);
    },0);

    if (condiçao) {

        clearInterval(Interval_for_Action);

    } else {

        x = transformarx(x);
        y = transformary(x);
        Action_in_xy(elemento, x, y);

    }

    console.log(condiçao,x)
    
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

export { Mover_Animation_plano_xy }
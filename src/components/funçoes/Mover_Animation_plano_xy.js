import { posiçaoRelativa_x } from './posiçao_relativa_x.js';
import { posiçaoRelativa_y } from './posiçao_relativa_y.js';

let Mover_Animation_plano_xy = (elemento, limite, transformarx, transformary, Action_in_xy) => {

    let x = posiçaoRelativa_x(elemento);
    let y = posiçaoRelativa_y(elemento);
    let Interval_for_Action = setInterval(() => {
        Mover_Animation_plano_xy(elemento, limite, transformarx, transformary, Action_in_xy);
    },0);

    if (x >= limite) {

        clearInterval(Interval_for_Action);

    } else {

        x = transformarx(x);
        y = transformary(x);
        Action_in_xy(elemento, x, y);

    } 
}

/*
let Interval_for_Action = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);

Deslocar_plano_xy(elemento, x, y);    
 */

export { Mover_Animation_plano_xy }
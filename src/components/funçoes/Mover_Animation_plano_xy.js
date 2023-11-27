let Mover_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {

    let x = posiçaoRelativa_x(elemento);
    if (x >= limite) {

        clearInterval(Desloc_interval);

    } else {

        x = transformarx(x);
        y = transformary(x);
        Deslocar_plano_xy(elemento, x, y);

    } 
}

/*
let Desloc_interval = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);
 */

export { Mover_Animation_plano_xy }
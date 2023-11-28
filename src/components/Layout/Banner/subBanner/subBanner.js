import React, { Fragment } from "react";
import './css/subBanner.css';

const SubBanner = ( props ) => { 
    /*
    const
    className = props.BannerPai + "Container_SubBanner1 " + 
    props.BannerPai + "SubBanner1 SubBanner " + props.className;
    */
   const 
   className =`${props.BannerPai}_subBanner subBanner ${props.className}`,
   id = `${props.BannerPai}_subBanner${props.indexItem}`;

    return ( 
          <div id={id} className={className} onClick={props.onClick || null} onLoad={(e) => {
            console.log(e.target) 
             if(props.event) {

              for ( const event of props.events ) {

                if (event) {
                  e.target.addEventListener(event.typeEvent, event.functionEvent)
                }
  
               }
               
             }
             }}>
            {props.children}
          </div>
        );
}

export default SubBanner
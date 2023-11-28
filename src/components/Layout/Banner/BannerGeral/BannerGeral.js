import React from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/BannerGeral.css';
import { genKey } from "../../../funçoes/genRandomKey";

const BannerGeral = ( props ) => { 
  const 
   className =`${props.BannerName}_Container Banner ${props.className}`,
   id = `${props.BannerName}`;
    return ( 
          <div id={id || "Banner" + genKey(5) } className={className || ""} onLoad={() => { return 0}}>
            {props.children}
          </div>
        );
}

export default BannerGeral
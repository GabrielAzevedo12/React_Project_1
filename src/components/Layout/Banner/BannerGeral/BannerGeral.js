import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/BannerGeral.css';

const BannerGeral = ( props ) => { 
    return ( 
          <div className={props.className}>
            {props.children}
          </div>
        );
}

export default BannerGeral
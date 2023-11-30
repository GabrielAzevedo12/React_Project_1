import React from "react";
import './css/Text.css';

const Text = ( props ) => { 
    const 
    className =`${props.TextName}_Container Text ${props.className}`,
    id = `${props.TextName}`;

    return (
      <div id={id} className={className}>
       {
        props.typeText_h1 && (
        <h1>
            {props.children}
        </h1>)
       }
       {
        props.typeText_p && (
        <p>
            {props.children}
        </p>)
       }
      </div> 
        );
}

export default Text
import React from "react";
import './css/Text.css';

const Text = ( props ) => { 
    const 
    className =`${props.TextName}_Container Text center ${props.className || ""}`,
    id = `${props.TextName}`;

    const analise_typeText = (typeText) => {
        if(typeText === "h1") {
            return (
                <h1>
                    {props.children}
                </h1>)
        }
        if(typeText === "p") {
            return (
                <p>
                    {props.children}
                </p>)
        }
    }

    return (
      <div id={id} className={className}>
        {analise_typeText(props.typeText)}
      </div> 
        );
}

export default Text
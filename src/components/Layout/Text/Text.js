import React from "react";
import './css/Text.css';
import styled from "styled-components";
//import styled, {keyframes} from "styled-components";

const Text = ( props ) => { 
    const 
    className =`${props.TextName}_Container Text center ${props.className || ""}`,
    id = `${props.TextName}`;

    
    const TextTitulo = styled.h1`
    text-align: center;
    font-size: 4rem;
    color: rgb(24, 24, 24);
    font-family: cursive;`

    const TextParagrafo = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    color: rgb(38, 54, 54);`

    const analise_typeText = (typeText) => {
        if(typeText === "h1") {
            return (
                <TextTitulo>
                    <h1>
                        {props.children}
                    </h1>   
                </TextTitulo>)
        }
        if(typeText === "p") {
            return (
                <TextParagrafo>
                    <p>
                        {props.children}
                    </p>
                </TextParagrafo>)
        }
    }

    return (
            <div id={id} className={className}>
                {analise_typeText(props.typeText)}
            </div>
        );
}

export default Text
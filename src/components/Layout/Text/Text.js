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
    color: ${ (props) => props.color || "rgb(24, 24, 24)" } ;
    font-family: cursive;`

    const TextParagrafo = styled.p`
    text-align: center;
    font-size:  ${ (props) => props.fontSize || "1.2rem" } ;
    color: ${ (props) => props.color || "rgb(38, 54, 54)" } ;`

    const analise_typeText = (typeText) => {
        if(typeText === "h1") {
            return (
                <TextTitulo id={id} className={className} fontSize={props.fontSize} color={props.color}>
                        {props.children}
                </TextTitulo>)
        }
        if(typeText === "p") {
            return (
                <TextParagrafo id={id} className={className} fontSize={props.fontSize} color={props.color}>
                        {props.children}
                </TextParagrafo>)
        }
    }

    return (
        <>
        {analise_typeText(props.typeText)}
        </>
        );
}

export default Text
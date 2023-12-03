import React from "react";
import './css/Text.css';
import styled, {keyframes} from "styled-components";

const Text = ( props ) => { 
    const 
    className =`${props.TextName}_Container Text center ${props.className || ""}`,
    id = `${props.TextName}`;

    // Create the keyframes
    const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
    `;

// Here we create a component that will rotate everything we pass in over two seconds
    const Text = styled.h1`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    `;

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
        <Text>
            <div id={id} className={className}>
                {analise_typeText(props.typeText)}
            </div>
        </Text> 
        );
}

export default Text
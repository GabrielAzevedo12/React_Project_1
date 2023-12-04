import styled from "styled-components";

const FlexRow = ( props ) => {
    
    const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: 
    ${ (props) => props.justifyContent ||"flex-start" };
    height: 
    ${ (props) => props.Height || "100vh" };
    width: 
    ${ (props) => props.Width || "100vw" };  

    background-color: black;
    color: rgb(125, 125, 158);
    `

    return (
        <FlexRow justifyContent={props.justifyContent} alignItems={props.alignItems} maxHeight={props.maxHeight} maxWidth={props.maxWidth} minHeight={props.minHeight} minWidth={props.minWidth} Height={props.Height} Width={props.Width}>
            {props.children}
        </FlexRow>
        );
}

export default FlexRow;

/*
align-items: 
    ${ (props) => props.alignItems || "flex-start" };
*/
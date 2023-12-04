import styled from "styled-components";

const FlexColumn = ( props ) => {
    
    const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: 
    ${ (props) => props.center ||"stretch" };
    align-items: 
    ${ (props) => props.center || "stretch" };
    height: 
    ${ (props) => props.Height || "100vh" };
    width: 
    ${ (props) => props.Width || "100vw" };  

    background-color: black;
    color: rgb(125, 125, 158);
    `

    return (
        <FlexColumn center={props.center} maxHeight={props.maxHeight} maxWidth={props.maxWidth} minHeight={props.minHeight} minWidth={props.minWidth} Height={props.Height} Width={props.Width}>
            {props.children}
        </FlexColumn>
        );
}

export default FlexColumn;

/*
max-height: 
    ${ (props) => props.maxHeight || "100vh" };
    max-width: 
    ${ (props) => props.maxWidth || "100vw" };

min-height: 
    ${ (props) => props.minHeight || "100vh" };
    min-width: 
    ${ (props) => props.minWidth || "100vw" };    
*/
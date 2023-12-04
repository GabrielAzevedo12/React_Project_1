import React from "react";
//import FakeText from "../../FakeText/FakeText";
import { useNavigate } from "react-router-dom";
import FlexColumn from "../../../flexColumn.css";
import ButtonDinamico from "../../Layout/ButtonDinamico/ButtonDinamico";
import styled from "styled-components";
import Text from "../../Layout/Text/Text";
import FlexRow from "../../../flexRow.css";

//<Redirect to="/" />
/*
  <>
          { name !== 'John Doe' ? <Redirect to="/" /> : null }
          <h1>About { name }</h1>
        </>
 */
const About = ({ name }) => {
    const navigate = useNavigate();
    const About = styled.div`
    & h1 {
    font-size: 5rem;
    }

    & > div {
      width: 100vw;
      min-height: 100vh;
      }
    
    & div.rotasSobre {
        min-width: 50vh;
        }
    `

    return (
      <About>
        <FlexColumn justifyContent={"center"} alignItems={"center"}>
          <h1>About</h1>
          <Text TextName="Text_About" typeText="p" fontSize={"1.3rem"} color={"rgb(66, 71, 117)"} className={"flex-row flex-wrap"}>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </Text>
          <FlexRow justifyContent={"space-evenly"} className={"rotasSobre"}>
            <ButtonDinamico onClick={() => navigate('/') } > 
              Go to Home
            </ButtonDinamico> 
            <ButtonDinamico onClick={() => navigate('/contact') } > 
              Contato
            </ButtonDinamico> 
          </FlexRow>
        </FlexColumn>
      </About>
        );
}

export default About
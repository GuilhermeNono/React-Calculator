import React from "react";
import Keyboard from "../Keyboard";
import { Container, Body, Result, Count, Screen } from "./styles";

const Calculator: React.FC = () => {
  return (
    <Container>
      <Body>
        <Screen>
          <Count>10 x 0</Count>
          <Result>0</Result>
        </Screen>
        <Keyboard />
      </Body>
    </Container>
  );
};

export default Calculator;

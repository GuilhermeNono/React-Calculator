import React, { useState } from "react";
import Keyboard from "../Keyboard";
import { Container, Body, Result, Count, Screen } from "./styles";

const Calculator: React.FC = () => {

  const [operator, setOperator] = useState<string>("x")
  const [firstNumber, setFirstNumber] = useState<number>(10)
  const [secondNumber, setSecondNumber] = useState<number>(0)
  const [result, setResult] = useState("")

  return (
    <Container>
      <Body>
        <Screen>
          <Count>{firstNumber} {operator} {secondNumber}</Count>
          <Result>0</Result>
        </Screen>
        <Keyboard />
      </Body>
    </Container>
  );
};

export default Calculator;

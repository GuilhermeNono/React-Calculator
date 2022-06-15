import React, { useState } from "react";
import { Operator } from "../../lib/types";
import Keyboard from "../Keyboard";
import { Container, Body, Result, Count, Screen } from "./styles";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [operator, setOperator] = useState<string>("")

  function inputNum(num: string) {
    setInput(input + num);
  }

  function clearInput() {
    setInput("");
  }

  return (
    <Container>
      <Body>
        <Screen>
          <Count>{input}</Count>
          <Result>0 </Result>
        </Screen>
        <Keyboard clearInput={clearInput} inputFunc={inputNum} />
      </Body>
    </Container>
  );
};

export default Calculator;

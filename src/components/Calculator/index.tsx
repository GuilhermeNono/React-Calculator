import React, { useState } from "react";
import { Operator } from "../../lib/types";
import Keyboard from "../Keyboard";
import { Container, Body, Result, Count, Screen } from "./styles";

const Calculator = () => {
  const [input, setInput] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [oldInput, setOldInput] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");

  function inputNum(num: any) {
    if (result === 0) {
      if (input === 0) {
        setInput(num);
      } else {
        setInput(input + num);
      }
    } else {
      setInput(num);
      setResult(0);
    }
  }

  function clearInput() {
    setInput(0);
    setOldInput(0);
    setResult(0);
  }

  function porcentage() {
    setResult(input / 100);
  }

  function changeSign() {
    if (input > 0) {
      setInput(-input);
    } else {
      setInput(Math.abs(input));
    }
  }

  function operatorHandler(operator: Operator) {
    setOperator(operator);
    setOldInput(input);
    inputNum(operator);
  }

  function calculate() {
    let valueInputLeft = parseFloat(oldInput?.toString());

    let indexOperator = input?.toString().indexOf(operator);
    let valueInputRight = parseFloat(
      input?.toString().slice(indexOperator + 1)
    );

    switch (operator) {
      case "+":
        setResult(valueInputLeft + valueInputRight);
        break;
      case "-":
        setResult(valueInputLeft - valueInputRight);
        break;
      case "x":
        setResult(valueInputLeft * valueInputRight);
        break;
      case "/":
        if (valueInputRight === 0) {
          return;
        } else {
          setResult(valueInputLeft / valueInputRight);
        }
        break;
    }
  }

  return (
    <Container>
      <Body>
        <Screen>
          <Count>{input}</Count>
          <Result>{result}</Result>
        </Screen>
        <Keyboard
          calculateFunc={calculate}
          operatorHandler={operatorHandler}
          changeSignFunc={changeSign}
          porcentageFunc={porcentage}
          clearFunc={clearInput}
          inputFunc={inputNum}
        />
      </Body>
    </Container>
  );
};

export default Calculator;

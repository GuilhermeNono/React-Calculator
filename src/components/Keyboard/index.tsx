import React from "react";
import { Operator } from "../../lib/types";
import Key from "../Key";

import { Container, Pad, Wrapper } from "./styles";

interface Props {
  inputFunc: (num: number) => void;
  clearFunc: () => void;
  porcentageFunc: () => void;
  changeSignFunc: () => void;
  operatorHandler: (operator:Operator) => void;
  calculateFunc: () => void;
  // sumFunc: (operator:Operator) => void;
  // equalFunc:() => void;
  // equalFunc, sumFunc, clearInput,
}

const Keyboard = ({calculateFunc, operatorHandler,changeSignFunc, inputFunc, porcentageFunc, clearFunc }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Pad>
          <Key clickEvent={clearFunc} color={"#3692F9"} digit={"AC"} />
          <Key clickEvent={changeSignFunc} color={"#3692F9"} digit={"+/-"} />
          <Key clickEvent={porcentageFunc} color={"#3692F9"} digit={"%"} />
          <Key clickEvent={operatorHandler} color={"#3692F9"} digit={"/"} />
          <Key clickEvent={inputFunc} isCircle digit={"7"} />
          <Key clickEvent={inputFunc} isCircle digit={"8"} />
          <Key clickEvent={inputFunc} isCircle digit={"9"} />
          <Key clickEvent={operatorHandler} color={"#3692F9"} digit={"x"} />
          <Key clickEvent={inputFunc} isCircle digit={"4"} />
          <Key clickEvent={inputFunc} isCircle digit={"5"} />
          <Key clickEvent={inputFunc} isCircle digit={"6"} />
          <Key clickEvent={operatorHandler} color={"#3692F9"} digit={"-"} />
          <Key clickEvent={inputFunc} isCircle digit={"1"} />
          <Key clickEvent={inputFunc} isCircle digit={"2"} />
          <Key clickEvent={inputFunc} isCircle digit={"3"} />
          <Key clickEvent={operatorHandler} color={"#3692F9"} digit={"+"} />
          <Key isCircle digit={"I"} />
          <Key clickEvent={inputFunc} isCircle digit={"0"} />
          <Key clickEvent={inputFunc} isCircle digit={"."} />
          <Key clickEvent={calculateFunc} color={"#78FF86"} digit={"="} />
        </Pad>
      </Wrapper>
    </Container>
  );
};

export default Keyboard;

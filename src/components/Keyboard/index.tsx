import React from "react";
import Key from "../Key";

import { Container, Pad, Wrapper } from "./styles";

interface Props {
  inputFunc: (num: string) => void;
  clearInput: () => void;
}

const Keyboard = ({clearInput, inputFunc }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Pad>
          <Key clickEvent={clearInput} color={"#3692F9"} digit={"AC"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"+/-"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"%"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"/"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"7"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"8"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"9"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"X"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"4"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"5"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"6"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"-"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"1"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"2"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"3"} />
          <Key clickEvent={inputFunc} color={"#3692F9"} digit={"+"} />
          <Key clickEvent={inputFunc} digit={"I"} />
          <Key clickEvent={inputFunc} isCircle={true} digit={"0"} />
          <Key clickEvent={inputFunc} digit={"."} />
          <Key clickEvent={inputFunc} color={"#78FF86"} digit={"="} />
        </Pad>
      </Wrapper>
    </Container>
  );
};

export default Keyboard;

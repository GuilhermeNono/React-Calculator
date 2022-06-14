import React from "react";
import Key from "../Key";
import { Container, Pad, Wrapper } from "./styles";

const Keyboard = () => {
  return (
    <Container>
        <Wrapper>
          <Pad>
            <Key color={"#3692F9"} digit={"AC"} />
            <Key color={"#3692F9"} digit={"+/-"}/>
            <Key color={"#3692F9"} digit={"%"} />
            <Key color={"#3692F9"} digit={"/"} />
            <Key isCircle={true} digit={"7"} />
            <Key isCircle={true} digit={"8"} />
            <Key isCircle={true} digit={"9"} />
            <Key color={"#3692F9"} digit={"X"} />
            <Key isCircle={true} digit={"4"} />
            <Key isCircle={true} digit={"5"} />
            <Key isCircle={true} digit={"6"} />
            <Key color={"#3692F9"} digit={"-"} />
            <Key isCircle={true} digit={"1"} />
            <Key isCircle={true} digit={"2"} />
            <Key isCircle={true} digit={"3"} />
            <Key color={"#3692F9"} digit={"+"} />
            <Key digit={"I"} />
            <Key isCircle={true} digit={"0"} />
            <Key digit={"."} />
            <Key color={"#78FF86"} digit={"="} />
          </Pad>
        </Wrapper>
    </Container>
  );
};

export default Keyboard;

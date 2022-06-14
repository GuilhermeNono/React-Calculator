import React from "react";
import Key from "../Key";

import { Container, Pad, Wrapper } from "./styles";

const Keyboard = () => {
  return (
    <Container>
        <Wrapper>
          <Pad>
            <Key digit={"AC"} />
            <Key digit={"+/-"}/>
            <Key digit={"%"} />
            <Key digit={"/"} />
            <Key digit={"7"} />
            <Key digit={"8"} />
            <Key digit={"9"} />
            <Key digit={"X"} />
            <Key digit={"4"} />
            <Key digit={"5"} />
            <Key digit={"6"} />
            <Key digit={"-"} />
            <Key digit={"1"} />
            <Key digit={"2"} />
            <Key digit={"3"} />
            <Key digit={"+"} />
            <Key digit={"I"} />
            <Key digit={"0"} />
            <Key digit={"."} />
            <Key digit={"="} />
          </Pad>
        </Wrapper>
    </Container>
  );
};

export default Keyboard;

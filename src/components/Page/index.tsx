import React from "react";

import Calculator from "../Calculator";

import { Container, Wrapper } from "./styles";

const Page = () => {
  return (
    <Container>
      <Wrapper>
        <Calculator />
      </Wrapper>
    </Container>
  );
};

export default Page;

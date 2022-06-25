import React from "react";

import { Container, ContainerTwo, GithubProfileLink } from "./styles";

const Github: React.FC = () => {
  return (
    <Container>
        <ContainerTwo>
            <img src="images/github.svg" alt="" />
            <GithubProfileLink href="https://github.com/GuilhermeNono">Guilherme Nono</GithubProfileLink>
        </ContainerTwo>
    </Container>
  );
};

export default Github;

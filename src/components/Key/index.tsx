import React from 'react';

import { Container, Button } from './styles';

interface Props {
    digit: string;
    isCircle?:boolean;
}

const Key = ({digit}:Props) => {
  return (
    <Container>
        <Button>
        {digit}
        </Button>
    </Container>
  );
}

export default Key;
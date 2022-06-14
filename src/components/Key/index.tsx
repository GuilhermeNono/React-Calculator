import React from 'react';

import { Container, ButtonK } from './styles';

interface Props {
    digit: string;
    isCircle?:boolean;
    color?:string;
}

const Key = ({digit, isCircle, color}:Props) => {
  return (
    <Container>
        <ButtonK color={color} circle={isCircle}>{digit}</ButtonK>
    </Container>
  );
}

export default Key;
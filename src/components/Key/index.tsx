import React from 'react';

import { Container, ButtonK } from './styles';

interface Props {
    digit: string;
    isCircle?:boolean;
    color?:string;
    clickEvent?: any;
}

const Key = ({clickEvent, digit, isCircle, color}:Props) => {
  return (
    <Container>
        <ButtonK onClick={() => {
          switch (digit) {
            case "AC":
              clickEvent();
              break;
            default:
              clickEvent(digit)
              break;
          }
        }} color={color} circle={isCircle} value={digit} >{digit}</ButtonK>
    </Container>
  );
}

export default Key; 
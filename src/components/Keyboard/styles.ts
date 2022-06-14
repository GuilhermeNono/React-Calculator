import styled from "styled-components";

export const Container = styled.div`
  background: #2a2d36;
  border-radius: 31px;
  width: 398px;
  height: 462px;    
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Pad = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

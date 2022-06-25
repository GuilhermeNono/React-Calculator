import styled from 'styled-components';

interface Props {
    circle?:boolean;
    color?:string;
    grow?:number;
}

export default styled.button<Props>`
border-radius: ${(props) => (props.circle ? '20px' : '8px')} ;
color: ${(props) => (props.color ? props.color : "#FFFFFF")};
`;
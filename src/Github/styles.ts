import styled from 'styled-components';

export const Container = styled.div`
  width: 339px;
  height: 79px;
  background:#3692F9;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
`;

export const ContainerTwo = styled.div`
  width: 339px;
  height: 79px;
  background:#2A2D36;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;  

export const GithubProfileLink = styled.a`
text-decoration: none;
padding-top: 25px;
font-size: 30px;
color: #fff;
text-align: center;
@keyframes rainbow {
    10%{
        color: #ff5e5e;
    }
    20%{
        color: #ff853e;
    }
    30%{
        color: #ffef5e;
    }
    40%{
        color: #80ff6f;
    }
    50%{
        color: #ba65ff;
    }
    60%{
        color: #6919c5;
    }
    70%{
        color: #ba65ff;
    }
    80%{
        color: #80ff6f;
    }
    90%{
        color: #ffef5e;
    }
}

&:hover{
    animation: rainbow 5s infinite;
    transition: 3s;
}
`
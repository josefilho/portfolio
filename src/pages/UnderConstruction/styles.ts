import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);  
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 4vw;

  animation: ${appearFromLeft} 1s;

  transition: all 0.5s;

  font-size: 1.8rem;

  @media (max-width: 1400px) {
    font-size: 1.7rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 720px) {
    margin-right: 0;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  color: var(--purple);
`;

const Description = styled.p`
  color: var(--gray);
`;

const Image = styled.img`
  height: 60%;

  animation: ${appearFromRight} 1s;

  transition: all 0.5s;

  @media (max-width: 1400px) {
    height: 40%;
  }

  @media (max-width: 1000px) {
    height: 32%;
  }

  @media (max-width: 900px) {
    height: 30%;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;

  width: 9.375rem;
  height: 2.5rem;

  background-color: transparent;
  color: var(--purple);
  border-radius: 8px;
  border: 1px solid var(--purple);

  text-decoration: none;
  font-weight: 600;

  margin-top: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: drop-shadow(0px 0px 4px var(--purple));
  }
`;

export { 
  Container,
  TextContainer,
  Title, 
  Description, 
  Image, 
  Button,
};

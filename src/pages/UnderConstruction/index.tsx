import { useState, useEffect, useCallback } from "react";

import {
  Container,
  TextContainer,
  Image,
  Title,
  Description,
  Button,
} from './styles';
import { Header } from '../../components/Header';

import underContructionSVG from '../../assets/under-construction.svg';

const UnderConstruction = () => {
  const [blinking, setBlinking] = useState('...');

  const blinkEndOfLine = useCallback(() => {
    switch (blinking) {
      case '...':
        setBlinking('');
        break;
      case '':
        setBlinking('.');
        break;
      case '.':
        setBlinking('..');
        break;
      case '..':
        setBlinking('...');
        break;
      default:
        setBlinking('...');
    }
  }, [blinking]);

  useEffect(() => {
    const interval = setInterval(() => {
      blinkEndOfLine();
    }, 600);

    return () => clearInterval(interval);
  }, [blinkEndOfLine]);

  return (
    <>
      <Header />

      <Container>
        <TextContainer>
          <Title>Under construction</Title>
          <Description> While thinking about this space{blinking}</Description>
          <Button to='/'>Go Home</Button>
        </TextContainer>
        <Image src={underContructionSVG} alt="Under Construction" />
      </Container>
    </>
  );
};

export { UnderConstruction };

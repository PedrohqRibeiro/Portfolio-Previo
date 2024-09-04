// About.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import minhaImagem from "../assets/cliente1.jpg";
import Footer from './Fotter';
import TestimonialsSection from './TestimonialsSection';
import Skills from './Skills';
import Projects from './Projects';
import Contato from "./Contato"
import WhatsAppIcon from './WhatsAppIcon';

// Animação para as letras aparecerem uma a uma
const typing = keyframes`
  0% {
    width: 0;
  }
  50%, 100% {
    width: 100%;
  }
`;

const blink = keyframes`
  0% {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  100% {
    border-right-color: transparent;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #1e1e1e;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 60px 40px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const TextWrapper = styled.div`
  flex: 2;
  max-width: 600px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`

font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;
  color: #61dafb;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #61dafb;
    margin: 20px auto 0;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;


`;

const NameTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const TypingText = styled.p`
  font-size: 1.2rem;
  color: #fff; /* Muda a cor do texto para branco */
  margin-top: 5px;
  overflow: hidden; /* Oculta o texto que ultrapassa a largura do elemento */
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  border-right: 3px solid rgba(255, 255, 255, 0.75); /* Cria o cursor */
  width: 0;
  animation: ${typing} 4s steps(30, end) infinite, ${blink} 0.5s step-end infinite alternate; /* Animação infinita */
`;

const About = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const fullText = "Programador Fullstack";

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(0);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de deletar
        }
      }
    };

    const timer = setInterval(handleTyping, 150);

    return () => clearInterval(timer);
  }, [text, isDeleting]);

  return (
    <>
      <AboutContainer>
        <ImageWrapper>
          <Image src={minhaImagem} alt="Pedro Henrique Ribeiro" />
          <NameTitle>Pedro Henrique Ribeiro</NameTitle>
          <TypingText>{text}</TypingText>
        </ImageWrapper>
        <TextWrapper>
          <Title>SobreMim</Title>
          <Description>
            Olá, meu nome é Pedro Henrique Ribeiro. Sou um desenvolvedor web apaixonado por criar experiências digitais modernas e envolventes. Tenho experiência com React, Node.js, JavaScript, Next.js, Tailwind CSS e Styled Components. Meu objetivo é desenvolver soluções que não apenas funcionem bem, mas que também ofereçam uma experiência de usuário incrível. Estou sempre buscando aprender novas tecnologias e melhorar minhas habilidades como <span>programador fullstack</span>.
          </Description>
        </TextWrapper>
      </AboutContainer>
      <Skills />
      <TestimonialsSection />
      <Projects />
      <Contato/>
      <Footer />
      <WhatsAppIcon/>
    </>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import minhaImagem from "../assets/cliente1.jpg";
import minhaImagem2 from "../assets/minhaimagem2.png"
import curriculoPDF from "../assets/curriculo1.pdf"; // Verifique o caminho do PDF
import Footer from './Fotter';
import TestimonialsSection from './TestimonialsSection';
import Skills from './Skills';
import Projects from './Projects';
import Contato from "./Contato"
import Header from './Header';
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
  scroll-margin-top: 80px;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #61dafb;
    margin: 20px auto 0;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top:40px;
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

// Contêiner fixo para evitar movimento no layout
const TypingContainer = styled.div`
  position: relative;
  width: 250px; /* Largura suficiente para o texto completo */
  height: 1.5rem; /* Altura suficiente para o texto */
  margin-top: 5px;
  display: flex;
  justify-content: center; /* Centralizar o texto */
`;

const TypingText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  position: absolute; /* Mantém o texto no mesmo lugar */
  animation: ${typing} 4s steps(30, end) infinite, ${blink} 0.5s step-end infinite alternate;
  width: 250px; /* Mantém a largura fixa */
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #61dafb;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
  @media (max-width: 768px) {
    margin-top:40px;
  }
`;

const About = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Velocidade de digitação
  const deletingSpeed = 50; // Velocidade ao apagar
  const fullText = "Programador Fullstack";

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de começar a apagar
      } else if (isDeleting && text === '') {
        setIsDeleting(false); // Volta a digitar
        setIndex(0);
      } else {
        setText(
          isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <>
      <Header />
      <AboutContainer>
        <ImageWrapper>
          <Image src={minhaImagem2} alt="Pedro Henrique Ribeiro" />
          <NameTitle>Pedro Henrique Ribeiro</NameTitle>
          <TypingContainer>
            <TypingText>{text}</TypingText>
          </TypingContainer>
          <DownloadButton href={curriculoPDF} download="curriculo-pedro-ribeiro.pdf">
            Download Currículo
          </DownloadButton>
        </ImageWrapper>
        <TextWrapper>
          <Title id="sobre">SobreMim</Title>
          <Description>
            Olá, meu nome é Pedro Henrique Ribeiro. Sou um desenvolvedor web apaixonado por criar experiências digitais modernas e envolventes. Meu objetivo é desenvolver soluções que não apenas funcionem bem, mas que também ofereçam uma experiência de usuário incrível. Estou sempre buscando aprender novas tecnologias e melhorar minhas habilidades como <span>programador fullstack</span>.
          </Description>
        </TextWrapper>
      </AboutContainer>
      <Skills />
      <TestimonialsSection />
      <Projects />
      <Contato />
      <Footer />
      <WhatsAppIcon />
    </>
  );
};

export default About;

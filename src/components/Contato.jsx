import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

// Contêiner principal do componente de contato
const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px; /* Padding reduzido */
  background-color: #1e1e1e;
  color: #fff;
  min-height: 40vh; /* Altura mínima ajustada para ser menor */

  @media (min-width: 768px) {
    padding: 20px 40px; /* Padding reduzido para telas maiores */
    min-height: 30vh; /* Altura mínima reduzida para telas maiores */
  }
`;

// Título da seção de contato
const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px; /* Margem inferior reduzida */
  color: #61dafb;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #61dafb;
    margin: 10px auto 0; /* Margem abaixo do título reduzida */
  }
`;

// Contêiner para os ícones de contato
const ContactOptions = styled.div`
  margin-top:40px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

// Botão de ícone de contato
const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ color }) => color};
  font-size: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    color: inherit;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Entre em Contato</Title>
      <ContactOptions>
        <IconButton href="https://www.instagram.com/pedrohqribeiro/" target="_blank" color="#E4405F" aria-label="Instagram">
          <FaInstagram />
        </IconButton>
        <IconButton href="https://wa.me/48998431796" target="_blank" color="#25D366" aria-label="WhatsApp">
          <FaWhatsapp />
        </IconButton>
        <IconButton href="https://github.com/PedrohqRibeiro" target="_blank" color="#333" aria-label="GitHub">
          <FaGithub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/pedro-henrique-ribeiro-dev/" target="_blank" color="#0077B5" aria-label="LinkedIn">
          <FaLinkedin />
        </IconButton>
      </ContactOptions>
    </ContactContainer>
  );
};

export default Contact;

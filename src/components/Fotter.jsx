import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position:static;
  bottom: 0;
  width: 100%;
  
`;

const SocialIcons = styled.div`
  margin: 10px 0;
  
  a {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    text-decoration: none;
    
    &:hover {
      color: #61dafb;
    }
  }
`;

const FooterText = styled.p`
  margin: 10px 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2024 PH sistemas. Todos os direitos reservados.</FooterText>
    <SocialIcons>
      <a href="https://www.facebook.com/pedrohenriqueribeiro.pedrinho" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </SocialIcons>
  </FooterContainer>
);

export default Footer;

// Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #1e1e1e;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconCard = styled.a`
  background: #282c34;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: #fff;
  width: 150px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: ${(props) => props.hoverColor || '#282c34'};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const IconName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const Contact = () => {
  const contacts = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/seu_usuario', color: '#E1306C' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/seu_numero', color: '#25D366' },
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/seu_usuario', color: '#333' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/seu_usuario', color: '#0077B5' },
  ];

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <LinksContainer>
        {contacts.map((contact) => (
          <IconCard key={contact.name} href={contact.href} target="_blank" hoverColor={contact.color}>
            <IconWrapper>{contact.icon}</IconWrapper>
            <IconName>{contact.name}</IconName>
          </IconCard>
        ))}
      </LinksContainer>
    </ContactContainer>
  );
};

export default Contact;

import React from 'react';
import styled from 'styled-components';
import ContactForm from '../../components/ContactForm';

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Arial, sans-serif';
  color: #333;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #222;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const BioSection = styled.section`
  text-align: left;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
    line-height: 1.6;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;

const ContactSection = styled.section`
  text-align: left;

  p {
    margin-bottom: 10px;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;

const About = () => {
  return (
    <>
    <AboutContainer>
      <ProfileImage src="path-to-profile-image.jpg" alt="Rafaela Orige" />
      <Heading>Rafaela Orige</Heading>
      <SubHeading>Personal Trainer</SubHeading>
      <BioSection>
        <p>Oi, sou Rafaela Orige, tenho 23 anos e sou personal trainer com 2 anos de experiência...</p>
        <p>Minha jornada no mundo do fitness começou...</p>
        <p>Acredito que...</p>
      </BioSection>
      <ContactSection>
        <p>Entre em contato comigo através do formulário abaixo ou me siga nas redes sociais!</p>
       
        {/* Formulário de Contato e Links de Redes Sociais */}
      </ContactSection>
      <ContactForm/>
    </AboutContainer>

  
    </>





  );

}

export default About;

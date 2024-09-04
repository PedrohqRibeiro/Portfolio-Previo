import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Fotter';
const ContactContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  font-family: 'Arial, sans-serif';
  color: #333;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
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

const ContactDetails = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 5px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #007BFF;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;
const Contact = () => {
  return (
    <>
    <Header/>
    <ContactContainer>
      <Heading>Contato</Heading>
      <SubHeading>Entre em contato conosco</SubHeading>
      <ContactDetails>
        <p>Email: rafaela.orige@example.com</p>
        <p>Telefone: (11) 98765-4321</p>
        <p>Siga-me nas redes sociais:</p>
        {/* Links para redes sociais */}
      </ContactDetails>
      <Form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Assunto:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </Form>
    </ContactContainer>
    <Footer/>
    </>
  );
}

export default Contact;

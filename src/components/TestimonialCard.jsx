import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #282c34;
  border-radius: 10px;
  color: white;
  text-align: center;
  max-width: 300px; /* Ajuste conforme necessário */
  margin: 0 auto; /* Centraliza o card */
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.h4`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #a9a9a9;
`;

const TestimonialCard = ({ photo, name, text }) => (
  <Card>
    <Photo src={photo} alt={name} />
    <Name>{name}</Name>
    <Text>{text}</Text>
  </Card>
);

export default TestimonialCard;

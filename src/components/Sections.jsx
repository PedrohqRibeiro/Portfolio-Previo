import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(33.333% - 20px);
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Section = () => (
  <SectionContainer>
    <Card>
      <Image src="https://via.placeholder.com/100?text=Motivação" alt="Motivação" />
      <Title>Motivação</Title>
      <Description>Acompanhamento profissional</Description>
    </Card>
    <Card>
      <Image src="https://via.placeholder.com/100?text=Personalizado" alt="Treino Personalizado" />
      <Title>Treino Personalizado</Title>
      <Description>Treino certo pra você</Description>
    </Card>
    <Card>
      <Image src="https://via.placeholder.com/100?text=Flexibilidade" alt="Flexibilidade" />
      <Title>Flexibilidade</Title>
      <Description>Treino compatível com o seu tempo</Description>
    </Card>
  </SectionContainer>
);

export default Section;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import cliente1 from "../assets/cliente1.jpg";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const testimonials = [
  {
    photo: cliente1,
    name: 'Pedro Henrique Ribeiro',
    text: 'Pedro é um amigo apaixonado por tecnologia!',
  },
  {
    photo: Logo2,
    name: 'Gabriel Barber',
    text: 'Pedro é um cliente meu que acabou virando um grande amigo, sempre atencioso e criativo em suas criações',
  },
  {
    photo: Logo1,
    name: 'Personalize Comunicação',
    text: 'Conheci o Pedro por um cliente dele e achei ele muito atencioso e rapido para criação de um linktree para minha empresa.',
  },
  {
    photo: 'https://via.placeholder.com/80',
    name: 'Cliente 4',
    text: 'Os treinos são desafiadores, mas os resultados valem a pena!',
  },
];

const Section = styled.section`
  padding: 40px 0;
  background-color: #1e1e1e;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 0;
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
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Esconde a grade em telas móveis */
  }
`;

const SliderContainer = styled(Slider)`
  display: none; /* Esconde o carrossel por padrão */
  
  @media (max-width: 768px) {
    display: block; /* Exibe o carrossel em telas móveis */
    max-width: 800px;
    margin: 0 auto;

    .slick-slide > div {
      display: flex;
      justify-content: center;
    }
  }

  .slick-slide {
    transition: opacity 0.5s ease; /* Suaviza a transição entre slides */
  }

  .slick-arrow {
    transition: background-color 0.3s ease, color 0.3s ease; /* Suaviza a transição das setas */
  }
`;

const Arrow = styled.div`
  display: block;
  background: transparent;
  color: #61dafb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Adiciona sombra para visibilidade */

  &.slick-prev {
    left: 10px; /* Ajusta a posição da seta esquerda */
  }

  &.slick-next {
    right: 10px; /* Ajusta a posição da seta direita */
  }

  &:hover {
    color: #50b7f5; /* Cor da seta ao passar o mouse */
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500, // Ajusta a velocidade da animação
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Ajusta a velocidade de troca automática
  arrows: true,
  nextArrow: <Arrow className="slick-next">›</Arrow>,
  prevArrow: <Arrow className="slick-prev">‹</Arrow>,
};

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="feedbacks">
      <Title>Feedbacks</Title>
      {isMobile ? (
        <SliderContainer {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard
                photo={testimonial.photo}
                name={testimonial.name}
                text={testimonial.text}
              />
            </div>
          ))}
        </SliderContainer>
      ) : (
        <Grid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              photo={testimonial.photo}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </Grid>
      )}
    </Section>
  );
};

export default TestimonialsSection;

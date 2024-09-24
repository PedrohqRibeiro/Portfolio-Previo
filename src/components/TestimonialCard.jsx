import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
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
  max-width: 300px;
  margin: 0 auto;
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

const Star = styled(FaStar)`
  color: #ffd700;
  font-size: 1.5rem;
  margin-right: 5px;
`;

const RatingContainer = styled.div`
  margin-top: 10px;
`;

const TestimonialCard = ({ photo, name, text, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i}>{i < rating ? '★' : '☆'}</Star>);
    }
    return stars;
  };

  return (
    <Card>
      <Photo src={photo} alt={name} />
      <Name>{name}</Name>
      <Text>{text}</Text>
      <RatingContainer>{renderStars(rating)}</RatingContainer>
    </Card>
  );
};

export default TestimonialCard;

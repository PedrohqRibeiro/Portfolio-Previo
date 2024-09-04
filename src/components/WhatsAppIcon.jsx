// WhatsAppIcon.jsx
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  text-decoration: none; // Remove underline from anchor tag

  &:hover {
    transform: scale(1.1);
    background-color: #128c7e;
  }

  &:hover span {
    visibility: visible; // Show the tooltip on hover
    opacity: 1;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    bottom: 10px;
    right: 10px;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 70px; // Position the tooltip above the button
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  visibility: hidden; // Hide tooltip by default
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent; // Create a small triangle for the tooltip
  }
`;

const WhatsAppIcon = () => {
  return (
    <WhatsAppButton
      href="https://wa.me/SEU_NUMERO_DE_TELEFONE"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
      <Tooltip>Fale comigo aqui!</Tooltip>
    </WhatsAppButton>
  );
};

export default WhatsAppIcon;

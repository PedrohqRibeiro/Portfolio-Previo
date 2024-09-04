import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaEnvelope, FaBlog } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: #333;
  transition: width 0.3s ease;
  overflow-x: hidden;

  &:hover {
    width: 250px;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px; /* Adiciona um padding à esquerda para alinhar o ícone e o texto */
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #444;
  }

  svg {
    font-size: 24px;
    margin-right: 10px;
    min-width: 24px; /* Mantém o espaço do ícone fixo */
  }
`;

const MenuText = styled.span`
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.3s ease;
  margin-left: 10px; /* Mantém o espaço entre o ícone e o texto */

  ${SidebarContainer}:hover & {
    opacity: 1; /* Mostra o texto ao expandir o menu */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <MenuItem href="#">
          <FaHome />
          <MenuText>Home</MenuText>
        </MenuItem>
        <MenuItem href="#">
          <FaInfoCircle />
          <MenuText>Sobre Mim</MenuText>
        </MenuItem>
        <MenuItem href="#">
          <FaEnvelope />
          <MenuText>Contato</MenuText>
        </MenuItem>
        <MenuItem href="#">
          <FaBlog />
          <MenuText>Blog</MenuText>
        </MenuItem>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

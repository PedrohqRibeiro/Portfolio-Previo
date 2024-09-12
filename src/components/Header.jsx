import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
   background-color: #1e1e1e;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #61dafb; /* Texto azul */
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  a {
    color: #61dafb; /* Texto azul */
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #fff; /* Hover para branco */
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #61dafb;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #1e1e1e;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MobileNavItem = styled.li`
  a {
    color: #61dafb; /* Texto azul */
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #fff; /* Hover para branco */
    }
  }
`;

const Header = ({ onLinkClick }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Fecha o menu após o clique
    if (onLinkClick) onLinkClick(); // Aciona o callback se for passado
  };

  return (
    <HeaderContainer>
      <Logo>Portfólio Web </Logo>
      <Nav>
        <NavList>
          <NavItem><a href="#sobre" onClick={handleLinkClick}>Sobre</a></NavItem>
          <NavItem><a href="#skills" onClick={handleLinkClick}>Skills</a></NavItem>
          <NavItem><a href="#projetos" onClick={handleLinkClick}>Projetos</a></NavItem>
          <NavItem><a href="#feedbacks" onClick={handleLinkClick}>Feedbacks</a></NavItem>
          <NavItem><a href="#contato" onClick={handleLinkClick}>Contato</a></NavItem>
         
        </NavList>
      </Nav>
      <MobileMenuButton onClick={handleMenuClick}>
        ☰
      </MobileMenuButton>
      <MobileNav isOpen={menuOpen}>
        <MobileNavList>
          <MobileNavItem><a href="#sobre" onClick={handleLinkClick}>Sobre</a></MobileNavItem>
          <MobileNavItem><a href="#skills" onClick={handleLinkClick}>Skills</a></MobileNavItem>
          <MobileNavItem><a href="#projetos" onClick={handleLinkClick}>Projetos</a></MobileNavItem>
          <MobileNavItem><a href="#feedbacks" onClick={handleLinkClick}>Feedbacks</a></MobileNavItem>
          <MobileNavItem><a href="#contato" onClick={handleLinkClick}>Contato</a></MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;

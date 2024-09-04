import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
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
    color: white;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #61dafb;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #282c34;
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
    color: white;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #61dafb;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <Logo>Personal Trainer</Logo>
      <Nav>
        <NavList>
          <NavItem><a href="#home">Home</a></NavItem>
          <NavItem><a href="#sobre-mim">Sobre Mim</a></NavItem>
          <NavItem><a href="#blog">Blog</a></NavItem>
          <NavItem><a href="#contato">Contato</a></NavItem>
        </NavList>
      </Nav>
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </MobileMenuButton>
      <MobileNav isOpen={menuOpen}>
        <MobileNavList>
          <MobileNavItem><a href="#home">Home</a></MobileNavItem>
          <MobileNavItem><a href="#sobre-mim">Sobre Mim</a></MobileNavItem>
          <MobileNavItem><a href="#blog">Blog</a></MobileNavItem>
          <MobileNavItem><a href="#contato">Contato</a></MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;

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

const DelayedLink = ({ href, children, onLinkClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Evita a navegação imediata
    setTimeout(() => {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a âncora
      if (onLinkClick) onLinkClick();
    }, 450); // Delay de 500ms
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

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
      <Logo>Portfólio Web</Logo>
      <Nav>
        <NavList>
          <NavItem>
            <DelayedLink href="#sobre" onLinkClick={handleLinkClick}>Sobre</DelayedLink>
          </NavItem>
          <NavItem>
            <DelayedLink href="#skills" onLinkClick={handleLinkClick}>Skills</DelayedLink>
          </NavItem>
          <NavItem>
            <DelayedLink href="#projetos" onLinkClick={handleLinkClick}>Projetos</DelayedLink>
          </NavItem>
          <NavItem>
            <DelayedLink href="#feedbacks" onLinkClick={handleLinkClick}>Feedbacks</DelayedLink>
          </NavItem>
          <NavItem>
            <DelayedLink href="#contato" onLinkClick={handleLinkClick}>Contato</DelayedLink>
          </NavItem>
        </NavList>
      </Nav>
      <MobileMenuButton onClick={handleMenuClick}>
        ☰
      </MobileMenuButton>
      <MobileNav isOpen={menuOpen}>
        <MobileNavList>
          <MobileNavItem>
            <DelayedLink href="#sobre" onLinkClick={handleLinkClick}>Sobre</DelayedLink>
          </MobileNavItem>
          <MobileNavItem>
            <DelayedLink href="#skills" onLinkClick={handleLinkClick}>Skills</DelayedLink>
          </MobileNavItem>
          <MobileNavItem>
            <DelayedLink href="#projetos" onLinkClick={handleLinkClick}>Projetos</DelayedLink>
          </MobileNavItem>
          <MobileNavItem>
            <DelayedLink href="#feedbacks" onLinkClick={handleLinkClick}>Feedbacks</DelayedLink>
          </MobileNavItem>
          <MobileNavItem>
            <DelayedLink href="#contato" onLinkClick={handleLinkClick}>Contato</DelayedLink>
          </MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiGraphql, SiStyledcomponents, SiReact, SiNodedotjs, SiExpress, SiHtml5, SiCss3 } from 'react-icons/si';
import projectImage1 from '../assets/cliente1.jpg';
import projectImage2 from '../assets/cliente2.jpg';
import projectImage3 from '../assets/cliente1.jpg';
import projectImage4 from '../assets/cliente1.jpg';
import Linktree from "../assets/linktree.png"
import Screen from "../assets/screenHamb.png"
import Converter from "../assets/conversor.png"

const ProjectsContainer = styled.div`
  padding: 40px 20px; /* Reduzido o padding para diminuir a distância vertical */
  background-color: #1e1e1e;
  color: #fff;
  min-height: 60vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
 

  
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px; 
  color: #61dafb;
  position: relative;
  scroll-margin-top: 80px; 

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #61dafb;
    margin: 15px auto 0; 
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  align-items: stretch;
  width: 100%;
  margin-top: 40px;
  padding-top: 20px;
`;

const ProjectCard = styled.div`
  background: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  }
`;

const ProjectImageWrapper = styled.div`
  height: 150px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 15px;
`;

const ProjectTechIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 15px;

  svg {
    font-size: 1.5rem;
  }

  .react-icon { color: #61dafb; }
  .nodejs-icon { color: #3c873a; }
  .js-icon { color: #f7df1e; }
  .css-icon { color: #2965f1; }
  .tailwind-icon { color: #38b2ac; }
  .nextjs-icon { color: #000; }
  .mongodb-icon { color: #47a248; }
  .graphql-icon { color: #e535ab; }
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: #61dafb;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #21a1f1;
  }
`;

const Projects = () => {
  const projectList = [
    {
      title: 'Linktree Personalize',
      description: 'Linktree feito em React e styled-components.',
      technologies: [<FaReact className="react-icon" />, <SiStyledcomponents className="tailwind-icon" />],
      link: 'https://linktree-personalize.vercel.app/',
      image: Linktree,
    },
    {
      title: 'Linktree Rafaela Personal',
      description: 'Linktree feito em React e Tailwind CSS.',
      technologies: [<FaReact className="react-icon" />, <SiTailwindcss className="tailwind-icon" />],
      link: 'https://linktree-rafaela-personal.vercel.app/',
      image: projectImage2,
    },
    {
      title: 'Pedidos Hamburgueria',
      description: 'Tela de pedido de Hamburgueria, com listagem de pedidos. Feito em React, Node e Express',
      technologies: [
        <FaReact className="react-icon" />,  // Ícone do React.js
        <SiNodedotjs className="nodejs-icon" />,  // Ícone do Node.js
        <SiExpress className="express-icon" />  // Ícone do Express
      ],

      link: 'https://hamburgueriadodinho.netlify.app/',
      image: Screen,
    },
    {
      title: 'Conversor de Moedas',
      description: 'Conversor de moedas criado em Javascript, com diversas opções de moedas.',
      technologies: [<FaJs className="js-icon" />,
        <SiHtml5 className="html-icon" />,
        <SiCss3 className="css-icon" />],
      link: 'https://conversor-lac-two.vercel.app/',
      image: Converter,
    },
  ];

  return (
    <ProjectsContainer>
      <Title id="projetos">Meus Projetos</Title>
      <ProjectsGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.title} />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechIcons>
                {project.technologies.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </ProjectTechIcons>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

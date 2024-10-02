import React from 'react';
import styled from 'styled-components'; 
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiStyledcomponents, SiExpress } from 'react-icons/si'; // Adiciona o SiExpress


const SkillsContainer = styled.div`
  padding: 40px;
  background-color: #1e1e1e;
  min-height: 50vh; 
  scroll-margin-top: 80px; /* Ajuste baseado na altura do header fixo */
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding-top: 50px;
`;

const SkillCard = styled.div`
  background: #282c34;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: #fff;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${(props) => props.color || '#fff'};
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38b2ac' },
  
    { name: 'styled-components', icon: <SiStyledcomponents />, color: '#db7093' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000' } 
  ];

  return (
    <SkillsContainer id="skills">
      <Title>Minhas Skills</Title>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;

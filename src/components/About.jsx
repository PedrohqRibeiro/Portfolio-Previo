import styled from 'styled-components';

const AboutSection = styled.section`
  background: linear-gradient(135deg, #4b0082, #000000);
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  color: transparent;
`;

function About() {
  return (
    <AboutSection>
      <p>
        Sou um <GradientText>programador fullstack</GradientText> apaixonado por desenvolvimento web...
      </p>
    </AboutSection>
  );
}

export default About;

import React from 'react';
import { FooterContainer, LemaContainer, HogwartsLogo } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <p>&copy; 2024 Harry Potter Movie</p>
        <p>Designed with magic by Your Name</p>
      </div>
      <LemaContainer>
        <p>"I solemnly swear that I am up to no good."</p>
        <p>-- Hogwarts School of Witchcraft and Wizardry</p>
        <HogwartsLogo src="https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter-thumbnail.png"  alt="Hogwarts Logo" />
      </LemaContainer>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import { HeaderContainer } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Characters</li>
          <li>Gallery</li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

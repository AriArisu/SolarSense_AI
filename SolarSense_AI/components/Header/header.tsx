import React from 'react';
import { Container, Title, Icon } from '@/components/Header/Header.style';

interface HeaderProps {
  title: string;
  onPress(): void;
}

const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <Container>
      <Icon size={25} name="menu" onPress={onPress} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
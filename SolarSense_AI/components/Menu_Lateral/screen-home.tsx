import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Button } from 'react-native';
import { RootDrawerParamList } from './index.routes';
import Header from './Header/header';
import { Container } from './Header/Header.style';

const Menu: React.FC = () => {
  const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'About'
  >;
  return (
    <Container>
      <Header title={''} onPress={function (): void {
        throw new Error('Function not implemented.');
      } }/>

      <Button
        title="Open Menu Lateral"
        onPress={() => navigation.openDrawer()}
      />
    </Container>
  );
};

export default Menu;
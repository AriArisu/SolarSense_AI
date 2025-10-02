import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Button } from 'react-native';
import { RootDrawerParamList } from './index.routes';
import Header from './Header/header';
import { Container } from './Header/Header.style';

type NavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

const Menu: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Header
        title={''}
        onPress={() => navigation.openDrawer()} // agora funciona
      />

      <Button
        title="Open Menu Lateral"
        onPress={() => navigation.openDrawer()}
      />
    </Container>
  );
};

export default Menu;

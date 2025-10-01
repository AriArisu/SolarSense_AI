import styled from 'styled-components/native';
import MenuIcon from '@/assets/images/menu-symbol-of-three-parallel-lines.svg';

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 35%;
`;

export const Icon = styled(MenuIcon)`
  margin-left: 10px;
`;
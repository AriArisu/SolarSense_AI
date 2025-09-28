import styled, { css } from 'styled-components/native';

interface CustomTextProps {
  isActive: boolean;
}

interface ContainerProps {
  isActive: boolean;
}


export const CustomText = styled.Text<CustomTextProps>`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #999;
  ${props =>
    props.isActive &&
    css`
      color: #ccc000;
    `}
`;

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin: 0px;
  padding: 12px 0px;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isActive &&
    css`
      background-color: rgba(0, 0, 0, 0.6);
    `}
`;
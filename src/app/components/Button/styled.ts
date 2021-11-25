import styled from 'styled-components';

export interface ButtonProps {
  block?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 20px 40px;
  font-family: 'Pangolin';
  font-size: 22px;
  background-color: #124c5f;
  color: white;
  border: none;
  border-radius: 10px;
  width: ${({ block }) => (block ? 'max-content' : '100%')};
`;

/**
 *
 * Button
 *
 */
import * as React from 'react';
import { ButtonStyled } from './styled';

interface ButtonProps {
  children: React.ReactElement | string;
  block?: boolean;
}

export function Button({ block = false, children }: ButtonProps) {
  return <ButtonStyled block={block}>{children}</ButtonStyled>;
}

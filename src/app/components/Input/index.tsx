/**
 *
 * Input
 *
 */
import * as React from 'react';
import { InputStyled } from './styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return <InputStyled {...rest} />;
}

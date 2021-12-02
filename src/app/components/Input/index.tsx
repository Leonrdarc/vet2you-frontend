/**
 *
 * Input
 *
 */
import * as React from 'react';
import { InputStyled, TextAreaStyled } from './styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
interface AreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: Props) {
  return <InputStyled {...rest} />;
}

export function TextArea({ ...rest }: AreaProps) {
  return <TextAreaStyled {...rest} />;
}

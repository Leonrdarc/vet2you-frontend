/**
 *
 * ServiceLeadForm
 *
 */
import * as React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Map } from '../Map';

// Styles
import { Title } from 'styles/shared-styles';
import { FormContainer, InputCol, InputRow } from './styled';

interface Props {}

export function ServiceLeadForm() {
  return (
    <FormContainer>
      <Title>Solicita nuestros servicios</Title>
      <InputRow>
        <InputCol>
          <Input placeholder="Nombre" />
          <Input placeholder="Servicio" />
          <Input placeholder="Gato o perro?" />
          <Input placeholder="Edad de tu mascota" />
          <Input placeholder="Numero de celular" />
        </InputCol>
        <InputCol>
          <Input placeholder="Dirección" />
          <Map />
          <Button>Solicitar servicio</Button>
        </InputCol>
      </InputRow>
    </FormContainer>
  );
}

import React from 'react';
import { Title } from 'styles/shared-styles';
import {
  Container,
  Column,
  DetailsContainer,
  DetailRow,
  DetailField,
  DetailValue,
  StateContainer,
  StateValue,
  Image,
  RouterLink,
} from './styled';

import Check from 'app/assets/green-check.png';
import Clock from 'app/assets/clock.png';
import Van from 'app/assets/van.png';
import { Button } from '../Button';
import { useRouteMatch } from 'react-router';

export enum ServiceState {
  PENDING = 'Pendiente de Confirmación',
  ONWAY = 'En camino',
  COMPLETED = 'Servicio completado',
}

interface TrackerProps {
  name: string;
  service: string;
  pet: string;
  phone: string;
  state: ServiceState;
}

export function TrackerDetails(props: TrackerProps) {
  const { url } = useRouteMatch();

  return (
    <Container>
      <Column>
        <Title>Detalles</Title>
        <DetailsContainer>
          <DetailRow>
            <DetailField>Nombre:&nbsp;</DetailField>
            <DetailValue>Leonardo Messi</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailField>Servicio:&nbsp;</DetailField>
            <DetailValue>Consulta veterinaria</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailField>Mascota:&nbsp;</DetailField>
            <DetailValue>Perro</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailField>Celular:&nbsp;</DetailField>
            <DetailValue>3013194342</DetailValue>
          </DetailRow>
        </DetailsContainer>
      </Column>
      <Column>
        <Title>Estado</Title>
        <DetailsContainer>
          <StateContainer>
            {props.state === ServiceState.COMPLETED ? (
              <Image src={Check} />
            ) : props.state === ServiceState.ONWAY ? (
              <Image style={{ padding: '8px 0' }} src={Van} />
            ) : (
              <Image src={Clock} />
            )}
            <StateValue>{props.state}</StateValue>
          </StateContainer>
          {props.state === ServiceState.COMPLETED && (
            <RouterLink to={`${url}/review`}>
              <Button>Reseñar el servicio</Button>
            </RouterLink>
          )}
        </DetailsContainer>
      </Column>
    </Container>
  );
}

/**
 *
 * Tracker
 *
 */
import { Button } from 'app/components/Button';
import { TextArea } from 'app/components/Input';
import { LandingContainer } from 'app/components/LandingBanner/styled';
import { Map } from 'app/components/Map';
import { ServiceState, TrackerDetails } from 'app/components/TrackerDetails';
import { Container } from 'app/components/TrackerDetails/styled';
import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { Title } from 'styles/shared-styles';
import { TrackerContainer, Title as PageTitle, Column } from './styled';
import StarRatings from 'react-star-ratings';

interface Props {}

export function Tracker(props: Props) {
  const { path } = useRouteMatch();

  const [rating, setRating] = useState<number>(0);

  return (
    <React.Fragment>
      <LandingContainer>
        <TrackerContainer>
          <PageTitle>Rastrea tu solicitud</PageTitle>
          <Map />
        </TrackerContainer>
      </LandingContainer>
      <Switch>
        <Route exact path={path}>
          <TrackerDetails
            name="Leonardo Messi"
            pet="Perro"
            service="Consulta Veterinaria"
            phone="3013194342"
            state={ServiceState.PENDING}
          />
        </Route>
        <Route exact path={`${path}/review`}>
          <Container>
            <Column>
              <Title>Reseña</Title>
              <StarRatings
                rating={rating}
                starRatedColor="orange"
                changeRating={newRating => setRating(newRating)}
                numberOfStars={5}
                name="rating"
              />
              <TextArea placeholder="Deja tu comentario" maxLength={144} />
              <Button block>Reseñar el servicio</Button>
            </Column>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

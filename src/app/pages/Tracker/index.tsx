/**
 *
 * Tracker
 *
 */
import { Button } from 'app/components/Button';
import { TextArea } from 'app/components/Input';
import { LandingContainer } from 'app/components/LandingBanner/styled';
import { ServiceState, TrackerDetails } from 'app/components/TrackerDetails';
import { Container, RouterLink } from 'app/components/TrackerDetails/styled';
import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { Title } from 'styles/shared-styles';
import { TrackerContainer, Title as PageTitle, Column } from './styled';
import StarRatings from 'react-star-ratings';
import { TrackerMap } from 'app/components/TrackerMap';

export function Tracker() {
  const { path } = useRouteMatch();

  const [rating, setRating] = useState<number>(0);
  const [cState, setCState] = useState(ServiceState.PENDING);

  return (
    <React.Fragment>
      <LandingContainer>
        <TrackerContainer>
          <PageTitle>Rastrea tu solicitud</PageTitle>
          <TrackerMap setState={setCState} />
        </TrackerContainer>
      </LandingContainer>
      <Switch>
        <Route exact path={path}>
          <TrackerDetails
            name="Leonardo Messi"
            pet="Perro"
            service="Consulta Veterinaria"
            phone="3013194342"
            state={cState}
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
              <RouterLink to={'/'}>
                <Button block>Reseñar el servicio</Button>
              </RouterLink>
            </Column>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

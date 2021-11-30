import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceCard, ServiceIcons } from 'app/components/ServiceCard';
import { LandingBanner } from 'app/components/LandingBanner';

// Styled
import { Title } from 'styles/shared-styles';
import { ServicesCardContainer, ServicesContainer } from './styled';
import { ServiceLeadForm } from 'app/components/ServiceLeadForm';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vet2You</title>
      </Helmet>
      <LandingBanner />
      <ServicesContainer id="servicios">
        <Title>Servicios</Title>
        <ServicesCardContainer>
          <ServiceCard name="Peluqueria" icon={ServiceIcons.Hairdresser} />
          <ServiceCard name="Veterinaria" icon={ServiceIcons.Bones} />
          <ServiceCard name="Cuidador" icon={ServiceIcons.Carer} />
          <ServiceCard name="Paseos" icon={ServiceIcons.Walker} />
          <ServiceCard name="Baño" icon={ServiceIcons.Bath} />
        </ServicesCardContainer>
      </ServicesContainer>
      <ServiceLeadForm />
    </>
  );
}

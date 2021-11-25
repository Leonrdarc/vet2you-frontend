import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Banner,
  BannerContainer,
  Column,
  FormContainer,
  HookDescription,
  HookTitle,
  InputCol,
  InputRow,
  LandingContainer,
  Logo,
  NavBar,
  NavLink,
  NavLinksContainer,
  NavLogo,
  ServicesCardContainer,
  ServicesContainer,
  Title,
} from './styled';
import LogoImage from '../../assets/logo.png';
import BannerImage from '../../assets/landing_banner.png';
import { Button } from 'app/components/Button';
import { ServiceCard, ServiceIcons } from 'app/components/ServiceCard';
import { Input } from 'app/components/Input';
import { Map } from 'app/components/Map';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vet2You</title>
        {/* <meta name="description" content="A Boilerplate application homepage" /> */}
      </Helmet>
      <NavBar>
        <NavLogo to="/">
          <Logo src={LogoImage} alt="logo" />
        </NavLogo>
        <NavLinksContainer>
          <NavLink to="/">Solicitar</NavLink>
          <NavLink to="#servicios">Servicios</NavLink>
          <NavLink to="/">Rastrea tu solicitud</NavLink>
        </NavLinksContainer>
      </NavBar>
      <LandingContainer>
        <BannerContainer>
          <Column>
            <HookTitle>Cuida a quien más quieres!</HookTitle>
            <HookDescription>
              En Vet2You estamos comprometidos con el bienestar de tu más fiel
              compañero!
            </HookDescription>
            <Button block>Solicitar servicio</Button>
          </Column>
          <Banner src={BannerImage} />
        </BannerContainer>
      </LandingContainer>
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
    </>
  );
}

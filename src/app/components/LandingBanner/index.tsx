/**
 *
 * LandingBanner
 *
 */
import * as React from 'react';
import { Button } from '../Button';
import { Column } from 'styles/shared-styles';
import {
  Banner,
  BannerContainer,
  HookDescription,
  HookTitle,
  LandingContainer,
} from './styled';

import BannerImage from '../../assets/landing_banner.png';

export function LandingBanner() {
  return (
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
  );
}

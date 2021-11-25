/**
 *
 * ServiceCard
 *
 */
import * as React from 'react';
import {
  BathLogo,
  BonesLogo,
  CardContainer,
  CarerLogo,
  HairdresserLogo,
  ServiceName,
  WalkerLogo,
} from './styled';

export enum ServiceIcons {
  Hairdresser = 'hairdresser',
  Bones = 'bones',
  Carer = 'carer',
  Walker = 'walker',
  Bath = 'bath',
}

interface Props {
  name: string;
  icon: ServiceIcons;
}

export function ServiceCard({ name, icon }: Props) {
  return (
    <CardContainer>
      {
        {
          hairdresser: <HairdresserLogo />,
          bones: <BonesLogo />,
          carer: <CarerLogo />,
          walker: <WalkerLogo />,
          bath: <BathLogo />,
        }[icon]
      }
      <ServiceName>{name}</ServiceName>
    </CardContainer>
  );
}

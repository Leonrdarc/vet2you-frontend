import styled from 'styled-components';

import { ReactComponent as Hairdresser } from '../../assets/icons/hairdresser.svg';
import { ReactComponent as Bones } from '../../assets/icons/bones.svg';
import { ReactComponent as Carer } from '../../assets/icons/carer.svg';
import { ReactComponent as Walker } from '../../assets/icons/walker.svg';
import { ReactComponent as Bath } from '../../assets/icons/bath.svg';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 30px;
  border: 1px solid #98f2e1;
  border-radius: 10px;
  width: 170px;
  margin-top: 50px;
  box-shadow: -6px 5px 11px -2px rgba(0, 0, 0, 0.21); ;
`;

export const ServiceName = styled.span`
  font-family: 'Pangolin';
`;

export const HairdresserLogo = styled(Hairdresser)``;
export const BonesLogo = styled(Bones)`
  margin: 14.48px 0;
`;
export const CarerLogo = styled(Carer)`
  margin: 10.11px 0;
`;
export const WalkerLogo = styled(Walker)`
  margin: 11.36px 0;
`;
export const BathLogo = styled(Bath)`
  margin: 13.46px 0;
`;

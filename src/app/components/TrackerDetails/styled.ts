import styled from 'styled-components';
import { NavLink } from '../NavBar/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1125px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DetailsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */
  font-family: Rubik;
  color: #000000;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const DetailField = styled.h4`
  font-weight: 700;
`;

export const DetailValue = styled.span`
  font-weight: 400;
`;

export const StateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StateValue = styled.h2`
  font-family: 'Pangolin';
  border-radius: 4px;
  width: max-content;
  margin-left: 1rem;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  font-weight: 400;
`;

export const Image = styled.img``;

export const RouterLink = styled(NavLink)`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
`;

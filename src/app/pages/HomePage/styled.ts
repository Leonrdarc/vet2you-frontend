import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 115px;
  max-width: 1125px;
  margin: 0 auto;
`;

export const NavLogo = styled(Link)`
  height: 70px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 70px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #124c5f;
  text-decoration: none;
`;

export const LandingContainer = styled.div`
  display: flex;
  height: calc(100vh - 115px);
  background-color: #fbf3ba;
`;

export const BannerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 600px;
  max-width: 1125px;
  margin: auto;
`;

export const HookTitle = styled.h1`
  font-size: 44px;
  font-family: 'Pangolin';
  max-width: 266px;
`;

export const HookDescription = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  max-width: 432px;
  margin-top: 14px;
  margin-bottom: 46px;
`;

export const Banner = styled.img`
  position: absolute;
  height: 100%;
  right: calc((1125px - 90vw) / 3);
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1125px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-family: 'Pangolin';
  font-size: 28px;
  border-bottom: 4px solid #3a8da8;
  border-radius: 4px;
  width: max-content;
`;

export const ServicesCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FormContainer = styled(Column)`
  margin: 0 auto;
  padding: 60px 0;
  max-width: 1125px;
  gap: 50px;
`;

export const InputCol = styled(Column)`
  flex: 1;
  gap: 26px;
`;
export const InputRow = styled(Row)`
  gap: 45px;
`;

import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
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

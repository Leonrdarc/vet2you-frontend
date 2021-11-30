/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import {
  Logo,
  NavBarContainer,
  NavLink,
  NavLinksContainer,
  NavLogo,
} from './styled';

import LogoImage from '../../assets/logo.png';

export function NavBar() {
  return (
    <NavBarContainer>
      <NavLogo to="/">
        <Logo src={LogoImage} alt="logo" />
      </NavLogo>
      <NavLinksContainer>
        <NavLink to="/">Solicitar</NavLink>
        <NavLink to="#servicios">Servicios</NavLink>
        <NavLink to="/">Rastrea tu solicitud</NavLink>
      </NavLinksContainer>
    </NavBarContainer>
  );
}

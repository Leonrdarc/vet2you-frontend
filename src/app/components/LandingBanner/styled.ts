import styled from 'styled-components';

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

import styled from 'styled-components';

export const TrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1125px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */
  letter-spacing: 0.05em;
  color: #124c5f;
  margin-bottom: 1rem;
`;

export const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * + * {
    margin-top: 1rem;
  }
`;

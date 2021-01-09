/*
 * Styling using styled components
 */

import styled from 'styled-components';
import heroBg from 'resources/img/amazon-hero.jpg';

export const HomeContainer = styled.div`
  height: 100%;
`;

export const HomeHeroBg = styled.div`
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 1)),
    url(${heroBg});
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
`;

export const SC = {
  HomeContainer,
  HomeHeroBg,
};

/**
 * Home
 */

import React from 'react';
import Lottie from 'lottie-react-web';
import styled from 'styled-components';
import { HomeProps } from './interface';
import { SC } from './styled';
import Spacing from 'components/Spacing';
import animationData from 'assets/animation/business.json';

const HeroContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* color: whitesmoke; */
`;

const SuperBigTitle = styled.div`
  font-size: 96px;
`;

const HeroAnimation = () => {
  return (
    <Lottie
      options={{
        animationData,
      }}
    />
  );
};

export const Home: React.FC<HomeProps> = () => {
  return (
    <HeroContainer>
      <SuperBigTitle>
        React
        <br /> Apollo <br />
        Nestjs <br /> GraphQL <br /> Boilerplate.
      </SuperBigTitle>
      <HeroAnimation />
    </HeroContainer>
  );
};

export default Home;

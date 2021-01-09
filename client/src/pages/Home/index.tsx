/**
 * Home
 */

import React from 'react';
import { HomeProps } from './interface';
import { SC } from './styled';
import Spacing from 'components/Spacing';

export const Home: React.FC<HomeProps> = () => {
  return <SC.HomeContainer></SC.HomeContainer>;
};

export default Home;

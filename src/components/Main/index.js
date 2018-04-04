import React from 'react';

import AboutPerson from 'components/AboutPerson';
import Skills from 'components/Skills';
import Portfolio from 'components/Portfolio';

import MainWrapper from './MainWrapper';

export class Main extends React.PureComponent {
  render() {
    return (
      <MainWrapper>
        <AboutPerson />
        <Skills />
        <Portfolio />
      </MainWrapper>
    );
  }
}

export default Main;

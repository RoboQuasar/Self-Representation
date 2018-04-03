import React, { Component } from 'react';
import AppWrapper from './AppWrapper';

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

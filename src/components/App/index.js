import React, { Component } from 'react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

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

        <Alert
          stack={{ limit: 2 }}
          position="bottoms-right"
          timeout={3000}
          effect="slide"
        />
      </AppWrapper>
    );
  }
}

export default App;

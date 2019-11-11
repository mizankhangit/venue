import React, { Component }  from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenuInfo from './components/venuInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {

  render() {
    return(
      <div>
        <Header/>
        <Element name="featured">
          <Featured />
        </Element>

        <Element name="info">
          <VenuInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Element name="footer">
          <Footer />
        </Element>
      </div>
    )
  }
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Title = () => (
  <header class="masthead text-center">
      <div class="container">
        <img class="img-responsive img-fluid mb-5 d-block mx-auto logo" src={ logo } /> 
        <h2 class="font-weight-light mb-0">Whatever our tagline is</h2>
      </div>
  </header>
);

export default Title;
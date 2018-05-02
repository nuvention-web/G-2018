import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Title = () => (
  <header class="masthead text-center">
      <div class="container logo">
        <img class="img-fluid mb-5 d-block mx-auto logo" src={ logo } /> 
        <h2 class="font-weight-light mb-0">Set your sights on the future.</h2>
      </div>
  </header>
);

export default Title;
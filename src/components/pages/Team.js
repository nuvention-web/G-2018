import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Team = () => (
  	<section class="mb-0" id="team">
      <div class="container">
        <h2 class="text-center text-uppercase">Team</h2>
        <br />

        <div class="row">
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={logo} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src= {logo} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={logo} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={logo} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={logo} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={logo} alt="" />
          </div>
        </div>

      </div>
    </section>
);

export default Team;
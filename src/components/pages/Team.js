import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import corinne from '../../assets/images/corinne.jpg';
import charbel from '../../assets/images/charbel.png';
import maia from '../../assets/images/maia.jpg';
import gabe from '../../assets/images/gabe.jpg';
// import umur from '../../assets/images/umur.png';
// import christy from '../../assets/images/christy.png';

const Team = () => (
  	<section class="mb-0" id="team">
      <div class="container">
        <h2 class="text-center text-uppercase">Team</h2>
        <h3 class="text-center"> Kyte is a platform built for students, by students.</h3>
        <h3 class="text-center"> Our team is passionate about potential—helping students find and nurture their unique possibilities, and watching them reach heights they never believed possible. </h3>

        <br />

        <div class="row team-row">
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={corinne} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src= {charbel} alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={maia} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <img class="img-fluid profpic" src={gabe} alt="" />
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
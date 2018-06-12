import React from 'react';
import { Link } from 'react-router-dom';

const Mentee = () => (
  <section class="bg-primary text-white mb-0" id="mentee">
    <div class="container">
    ` <h2 class="text-center text-uppercase text-white">
        Mentee
      </h2>
      <h3 class="text-center text-white">
        Take steps early to get ahead!
      </h3>
      <br />
      <div class="row">
        <div class="col-lg-5 ml-auto">
          <h3 class="text-center text-white">
            High School
          </h3>
          <p class="lead">
            Will you be the first in your family to attend college? Are you full of aspirations for your future, but unsure of how to get from Point A to Point B? Are you curious, driven and seeking resources beyond what your school offers? Are you willing to commit time each week to working with a mentor and college student? Your kyte triad will help you define and accomplish your goals.
          </p>
        </div>
        <div class="col-lg-5 mr-auto">
          <h3 class="text-center text-white">
            College Student
          </h3>
          <p class="lead">
            Are you a first-generation college student pursuing an undergraduate or graduate degree? Are you a driven learner between the ages of 18 and 25 seeking comprehensive feedback and personal connections in the professional world? Are you willing to be a resource for a high schooler navigating the college application process? Give back to the next generation while investing in your future.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 ml-auto">
          <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="https://docs.google.com/forms/d/e/1FAIpQLSfloXOGCkqgkwKV6q3atHPkWJ3QFrDxF6vYdk9vkhS4k1zk1Q/viewform?usp=sf_link">
              Sign up!
            </a>
          </div>
        </div>
        <div class="col-lg-6 ml-auto">
          <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="https://docs.google.com/forms/d/e/1FAIpQLSc_L4iktnIUBaWvQb8up37Ewlw2cWEs8v6OyqXVxX9th243Iw/viewform?usp=sf_link">
              Sign up!
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Mentee;

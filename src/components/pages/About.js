import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section class="bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="text-center text-uppercase text-white">About</h2>
        <br />
        <div class="row">
          <div class="col-lg-5 ml-auto">
            <p class="lead">At Kyte, we believe the path from high school to professional success goes beyond academics. We focus on personal growth, self-presentation, and interpersonal skills. We strive to create lasting relationships between working professionals and first-generation high school and college students. Each Kyte Triad consists of a working professional under the age of 35, a first-generation college student, and a high school student who will be the first in their family to attend college. </p>
          </div>
          <div class="col-lg-5 mr-auto">
            <p class="lead"> Our goal is to inspire. We treat students as individuals, each at a different stage of life, with unique experiences. Students choose what matters most to them in a mentorship relationship. And they have agency in where the relationship takes them. We don’t prime students for specific schools or professions. We want to help students soar—and we help them see all the possibilities. </p>
          </div>
        </div>
      </div>
    </section>
);

export default About;
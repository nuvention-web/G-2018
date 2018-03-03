import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1> Home Page </h1>
    <Link to='/mentorsignup'> Mentors </Link>
    <Link to='/menteesignup'> Mentees </Link>
  </div>
);

export default HomePage;

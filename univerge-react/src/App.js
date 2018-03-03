import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MentorSignUp from './components/pages/MentorSignUp';

const App = () => (
<div>
  <Route path="/" exact component={HomePage} />
  <Route path="/mentorsignup" exact component={MentorSignUp} />
</div>
);

export default App;

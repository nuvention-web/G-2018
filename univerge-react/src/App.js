import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MentorSignUp from './components/pages/MentorSignUp';
import MenteeSignUp from './components/pages/MenteeSignUp';

const App = () => (

<div className='ui container fluid'>
  <Route path="/" exact component={HomePage} />
  <Route path="/mentorsignup" exact component={MentorSignUp} />
  <Route path="/menteesignup" exact component={MenteeSignUp} />
</div>
);

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import HomePage from './components/pages/HomePage';
import MentorSignUp from './components/pages/MentorSignUp';
import MenteeSignUp from './components/pages/MenteeSignUp';

export default class App extends Component {
render() {
    return (
      <div className='ui container fluid'>

        <Route path="/" exact component={HomePage} />
        <Route path="/mentorsignup" exact component={MentorSignUp} />
        <Route path="/menteesignup" exact component={MenteeSignUp} />
      </div>
    )
  }
}

// export default App;


// state = { activeItem: 'home' }
//
// handleItemClick = (e, { name }) => this.setState({ activeItem: name })

// render() {
// const { activeItem } = this.state

// <Menu pointing secondary>
//   <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//   <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
//   <Menu.Menu position='right'>
//     <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
//   </Menu.Menu>
// </Menu>
//

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
// import HomePage from './components/pages/HomePage';
// import MentorSignUp from './components/pages/MentorSignUp';
// import MenteeSignUp from './components/pages/MenteeSignUp';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import Mentor from './components/pages/Mentor';
import Mentee from './components/pages/Mentee';
import Team from './components/pages/Team';

// export default class App extends Component {
// render() {
//     return (
//       <div className='ui container fluid'>
//
//         <Route path="/" exact component={HomePage} />
//         <Route path="/mentorsignup" exact component={MentorSignUp} />
//         <Route path="/menteesignup" exact component={MenteeSignUp} />
//       </div>
//     )
//   }
// }


export default class App extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={LandingPage}/>
				<Route path="/about" exact component={About}/>
				<Route path="/mentor" exact component={Mentor}/>
				<Route path="/mentee" exact component={Mentee}/>
				<Route path="/team" exact component={Team}/>
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

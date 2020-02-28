import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component{
	constructor(){
		super()
		this.state={ //this describes our app, these values CAN change
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){ //when component mounts (app starts), set the robots array to the robots from robots.js
		fetch('https://jsonplaceholder.typicode.com/users')//fetching users from url
		.then(response=>{//getting a response
			return response.json();
		})
		.then(users => { //after getting users we are updating them so web app can update with the users
			this.setState({robots: users});
		});

	}

	onSearchChange=(event)=> { //the arrow function sytnax here is used to make sure that the "this" value is according to where it was created
		this.setState({ searchfield: event.target.value})


	}


	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			//if name of the robot(in lower case) includes whatever is inputted into searchfield at that moment, return robots that contain that input
		})
		if (this.state.robots.length===0){
			return <h1> Loading </h1>
		} else{
		return(
			<div className='tc'>
				<h1 className='f1'> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots = {filteredRobots} /> 
				</Scroll>
			</div>



	);
}
}
}

export default App;
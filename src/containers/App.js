import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Error from '../components/Error';

class App extends Component{
    
	constructor(props) {
		super(props);

		this.state = {
		  robots: [],
		  searchFild: ''
		};
	}

	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {

		// 	return response.json();

		// }).then((robots) => {
		// 	this.setState({robots:robots});
		// });
	}

	onSearchChange = (event) => {

		this.setState({searchFild:event.target.value});
	}

	render(){

		const {robots,searchFild} = this.state;

		const filterRobots = robots.filter(robot => {

			return robot.name.toLocaleLowerCase().includes(searchFild.toLocaleLowerCase());

		});

		return !robots.length ? 
		<h1 className="tc">Loding</h1> :
		(<div className="tc">
			<h1 className = 'f1'>RoboFriends</h1>
			<SearchBox event = {this.onSearchChange} />
			<Scroll>
			    <Error>
					<CardList robots = {filterRobots} />
				</Error>
			</Scroll>
		</div>);
	}
}

export default App;
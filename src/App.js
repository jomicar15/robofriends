import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import MyComponent from '../components/MyComponent'
import './App.css'


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	// Se utiliza el componentDidMount() para poder cargar la información luego de reenderizar nuestro sitio web.
	//es como cuando colocabamos el script al final de todo nuestro html para poder cargar primero la página y luego ejecutar los scripts
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(user=>this.setState({robots: user}));
		
	}

	onSearchChange = (event) =>{
		//Actualizando nuestra entrada a lo que se introduce en la búsqueda
		this.setState({searchfield : event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield);
		})

		//Aquí utilizando una pantalla de carga intermedia por si nuestro archivo de otra ubicación aún no se muestra
		if(this.state.robots.length === 0){
			return(<h1>Loading</h1>);
		}else{
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filteredRobots}/>
					</Scroll>
					<MyComponent />
				</div>
			);
		}
	}
}

export default App;
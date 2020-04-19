import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import MyComponent from '../components/MyComponent'
import ErrorBoundry from '../components/ErrorBoundry'
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
		const { robots , searchfield }=this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield);
		})

		//Aquí utilizando una pantalla de carga intermedia por si nuestro archivo de otra ubicación aún no se muestra
		return !robots.length ?
		// utilizando el negado del length tenemos que si la cadena es vacía osea cero, entonces negamos el cero(0) y nos da uno(1) 
		// lo que es equivalente a decir que se cambia el falso por el verdadero
		//por ultimo utilizamos operador ternario para hacer más limpia la comparación del if anterior
			<h1>Loading</h1> :
			//sino retornamos
			(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots = {filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
					<MyComponent />
				</div>
			);
	}
}

export default App;
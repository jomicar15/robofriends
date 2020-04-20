import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import MyComponent from '../components/MyComponent'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
//agregando redux para conectar nuestros reducers
import { setSearchField , requestRobots } from '../actions'

const mapStateToProps = (state) =>{
	return { 
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
};

const mapDispatchToProps = (dispatch) =>{
	return{ 
		onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
		onRequestRobots: ()=> dispatch(requestRobots())
	}
};



class App extends Component {

	// Se utiliza el componentDidMount() para poder cargar la información luego de reenderizar nuestro sitio web.
	//es como cuando colocabamos el script al final de todo nuestro html para poder cargar primero la página y luego ejecutar los scripts
	componentDidMount(){
			this.props.onRequestRobots();
	}

	// onSearchChange = (event) =>{
	// 	//Actualizando nuestra entrada a lo que se introduce en la búsqueda
	// 	this.setState({searchfield : event.target.value})
	// }

	render(){
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField);
		})

		//Aquí utilizando una pantalla de carga intermedia por si nuestro archivo de otra ubicación aún no se muestra
		return isPending ?
		// utilizando el negado del length tenemos que si la cadena es vacía osea cero, entonces negamos el cero(0) y nos da uno(1) 
		// lo que es equivalente a decir que se cambia el falso por el verdadero
		//por ultimo utilizamos operador ternario para hacer más limpia la comparación del if anterior
			<h1>Loading</h1> :
			//sino retornamos
			(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
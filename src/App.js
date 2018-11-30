import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Merchandise from './components/Merchandise';
import ProductRegister from './components/ProductRegister';
//Clases a importar para renderizar

class App extends Component {
  render() {
		const {total} = this.props;
    return (
      <div className="App">
        <Merchandise />
        <ProductRegister />
      <div>
      	<h1> total: </h1>
      	<h2> Q {total} </h2>
      </div>
      </div>
    );
  }
}

export default connect(
	state => ({
		total: state.carritoReducer.total,
	}),
	undefined,

)(App);

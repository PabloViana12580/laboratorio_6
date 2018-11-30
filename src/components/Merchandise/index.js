import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product';
import * as carritoActions from '../../actions/carritoCompras';
import './merchandise.css'

class Merchandise extends React.Component{
	render(){
	const { products, addNew} = this.props;
	return(
		<div className ="merchandise">
			{
				products.map((response, i) => (
					<Product key={i} nombre={response.name} precio={response.price} cantidad={response.quantity} addNewProduct={() => addNew(response.id)} />
				))
			}
		</div>
	);
	}
}

export default connect(
	state => ({
		products: state.carritoReducer.products,
	}),
	dispatch => ({
		addNew(id) {
			dispatch(carritoActions.newService(id));
		}
	}),
)(Merchandise);
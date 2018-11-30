import React from 'react';
import './producto.css';

const Product = ({
	addNewProduct = undefined,
	nombre = "",
	precio = "",
	cantidad = "",
}) => (
	<div className = 'wrapper'>
		<div className={(cantidad === 0) ? 'ProductosDisable': 'ProductosAble'}>
			<h3> Nombre {nombre}</h3>
			<h3> Precio {precio} </h3>
			<h3> Cantidad {cantidad} </h3>
			<button onClick = {addNewProduct} className = "btnRegister" disabled = {(cantidad ===0)}>
				Agregar
			</button>
		</div>
	</div>
);


export default Product;
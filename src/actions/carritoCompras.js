import * as carritoActions from '../types/carritoCompras';

export const newName = name => ({
	type: carritoActions.PRODUCT_NAME,
	name,
});

export const newPrice = price => ({
	type: carritoActions.PRODUCT_PRICED,
	price,
});

export const newQuantity = quantity => ({
	type: carritoActions.PRODUCT_QUATITY,
	quantity,
});

export const newProduct = (nombre, precio, cantidad) => ({
	type: carritoActions.PRODUCT_ADDED,
	payload:{
		nombre,
		precio,
		cantidad}
});

export const newService = id => ({
	type:  carritoActions.NEW_PRODUCT_ADDED,
	id,	
});
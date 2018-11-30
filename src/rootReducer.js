import { combineReducers } from 'redux';
import carritoReducer, * as fromCarrito from './reducers/carritoReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  carritoReducer,
  form: formReducer,
});

export const getProducts = state => 
	fromCarrito.getProducts(state.carritoReducer.products);

export default rootReducer;
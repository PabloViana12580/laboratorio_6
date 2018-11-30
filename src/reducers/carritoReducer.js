import * as carritoTypes from '../types/carritoCompras';

const defaultState = {
  products: [{
    id: 0,
    name: 'Jocotes',
    quantity: 1,
    price: 10.0,
  }],
  total: 0.0,
};

const carritoReducer = (state = defaultState, action) => {
  switch (action.type) {
  case carritoTypes.PRODUCT_ADDED:
    return {
      ...state,
      products: [
        ...state.products,
        {
          id: state.products.length,
          name: action.payload.nombre,
          price: action.payload.precio,
          quantity: action.payload.cantidad,
        },
      ],
    };
  case carritoTypes.NEW_PRODUCT_ADDED:
    return {
      ...state,
      products: state.products.map(prod => ((prod.id === action.id)
        ? {
          ...prod,
          quantity: prod.quantity - 1,
        }
        : prod)),
      total: Number(state.total) + Number(state.products[action.id].price),
    };
  default:
    return state;
  }
};

export const getProducts= (state) => state.carritoReducer;

export default carritoReducer;
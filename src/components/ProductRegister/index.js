import React from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as carritoActions from '../../actions/carritoCompras';
import TextInput from '../Input';
import NumInput from '../NumInput';
import './product.css';


class ProductRegister extends React.Component{
  render() {
    const {
      onSubmit,
      name,
      price,
      quantity,
    } = this.props;
    return (
      <div className = "ProductInfo">
        <form onSubmit={onSubmit}>
          <Field
            name="name"
            label="Nombre de producto"
            component={TextInput}
          />

          <Field
            name="price"
            label="Precio"
            
            component={NumInput}
          />  

          <Field
            name="quantity"
            type="number"
            label="Cantidad"
            component={NumInput}
          />

        </form>

        <button onClick={
          () => {
            onSubmit(
              name,
              price,
              quantity,
            )
          }
        } className = "btnRegistrar" type="submit">Registrar Producto</button>

      </div>
    );
  }
}

ProductRegister.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

let ProductForm = reduxForm({
  form: 'carrito',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(ProductRegister);

const selector = formValueSelector('carrito')

const RegisterContainer = connect(
  state =>{
    const name = selector(state, 'name')
    const price =  selector(state, 'price')
    const quantity = selector(state, 'quantity')
    return{
    	name,
    	price,
    	quantity
    }
  },
  dispatch =>({
    onSubmit(name, price, quantity) {
      dispatch(carritoActions.newProduct(
        name,
        price,
        quantity
      ));
    },
  }),
)(ProductForm);

export default RegisterContainer;


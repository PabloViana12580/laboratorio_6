import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './customInput.css';

const CustomInput = ({
  input,
  meta,
  label,
}) => (
    <TextField
      className="customInput"
      label={label}
      placeholder={label}
      type="text"
      error={(meta.touched && meta.error !== undefined)}
      helperText={meta.touched && meta.error}
      {...input}
    />
);

CustomInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default (CustomInput);

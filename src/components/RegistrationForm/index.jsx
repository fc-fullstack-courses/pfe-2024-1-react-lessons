import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { REGISTRATION_SCHEMA } from '../../validation';
import styles from './RegistrationForm.module.css';

const initialState = {
  email: '',
  password: '',
  nickname: '',
  country: 'UA',
  comment: '',
  isSubscribed: false,
  gender: 'male',
};

function RegistrationForm(props) {
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);

    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      {(formikProps) => {
        // console.log(formikProps);
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <input
              type='email'
              name='email'
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
            />
            <button type='submit'>Відправити форму</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;

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
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={REGISTRATION_SCHEMA}
    >
      {/* {(formikProps) => {
        console.log(formikProps.errors);
        console.log(formikProps.touched);
        return ( */}
          <Form className={styles.container}>
            <Field name='email' type='email' placeholder='Enter email' />
            {/* {formikProps.errors.email && formikProps.touched.email && (
              <div className='error'>{formikProps.errors.email}</div>
            )} */}
            <ErrorMessage name='email' component='div' className='error' />
            <Field
              name='password'
              type='password'
              placeholder='Enter password'
            />
            <ErrorMessage name='password' />
            <Field name='nickname' placeholder='Enter nickname' />
            <ErrorMessage name='nickname' />
            <Field as='select' name='country'>
              <option value='UK'>United Kingdom</option>
              <option value='SWE'>Sweden</option>
              <option value='UA'>Ukraine</option>
              <option value='JP'>Japan</option>
            </Field>
            <ErrorMessage name='country' />
            <Field as='textarea' name='comment' />
            <ErrorMessage name='comment' />
            <label>
              <Field type='checkbox' name='isSubscribed' />
              <span>Я згоден підписатися на ваш спам</span>
            </label>
            <ErrorMessage name='isSubscribed' />
            <fieldset>
              <legend>Your gender</legend>
              <label>
                <Field type='radio' name='gender' value='male' /> Male
              </label>
              <label>
                <Field type='radio' name='gender' value='female' /> Female
              </label>
              <ErrorMessage name='gender' />
            </fieldset>
            <button type='submit'>Register</button>
          </Form>
        {/* );
      }} */}
    </Formik>
  );
}

export default RegistrationForm;

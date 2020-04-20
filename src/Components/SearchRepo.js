import React, { useState} from 'react';
import '../assets/styles/styles.css';
import {Formik , Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const validation = yup.object().shape({
  searchField: yup.string().required(),
});

const SearchRepo = ({handleSubmit}) => (
  <Formik 
      initialValues={{searchField: ''}} onSubmit={handleSubmit} validationSchema={validation}>
      <aside>
          <Form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-block">
                  <Field
                    type="text"
                    name='searchField' 
                    id='searchField' 
                    placeholder={'Busca de Usuários'}
                  />
                  <ErrorMessage className="form-error" component="span"  name="searchField"/>
              </div>
              <button type='submit'>Buscar</button>
            </div>
          </Form>
      </aside> 
    </Formik>
  )

export default SearchRepo;
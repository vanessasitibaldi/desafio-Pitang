import React from 'react';
import {Formik , Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import '../assets/styles/styles.css';


const validation = yup.object().shape({
  searchField: yup.string().required(),
});

const SearchComponent = ({handleSubmit}) => (

  <Formik initialValues={{searchField: ''}} onSubmit={handleSubmit} validationSchema={validation}>
      <aside>
          <Form >
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

export default SearchComponent;


import React from 'react';
import { Formik, Field, Form } from 'formik';
import Results from './Results';

const PictureExample = () => {
  return (
    <div>
      <Formik
        initialValues={{
          Photo1: ''
        }}
        onSubmit={(values) => {
          console.log(values)

          Results.post('./marks.json', values).then(response => {
            console.log(response)
          })
          let data = new FormData()

          data.append('Photo1', values.Photo1)

          return fetch(Results,
            { method: "POST", headers: new Headers({ Accept: 'application/json' }), body: data })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then((error) => console.log(error));
        }}
      >
        <Form>
          <Field type="file" name="Photo1" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
};
export default PictureExample;
import React, { useEffect } from 'react';

import axios from 'axios';
import { Container } from './styles';

// import api from '../../services/api';

export default function List() {
  useEffect(() => {
    console.log('Iniciou');
    axios
      .post(
        'http://localhost:1337/parse/functions/hello',
        {
          name: 'Professor João',
          parts: '',
        },
        {
          headers: {
            'X-Parse-Application-Id': 'myAppId',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []); // eslint-disable-line

  return (
    <Container>
      <h1>List</h1>
    </Container>
  );
}

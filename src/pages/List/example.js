/* eslint-disable no-console */
import React from 'react';

import Parse from 'parse';
import { Container } from './styles';

export default function Example() {
  Parse.initialize(
    process.env.REACT_APP_APP_ID,
    process.env.REACT_APP_JAVASCRIPT_KEY,
    process.env.REACT_APP_MASTER_KEY
  );

  Parse.serverURL = 'https://server-teachers-list.herokuapp.com/parse';

  async function handleSend() {
    try {
      console.log('Enviou');
      const Post = Parse.Object.extend('Post');
      const post = new Post();
      const data = {
        body: 'Hello my name is Eduardo',
        tags: ['welcome', 'first post'],
        numComments: 2,
      };

      const response = await post.save(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGetOne(itemId) {
    console.log('Get');

    try {
      const query = new Parse.Query('Post'); // eslint-disable-line
      const response = await query.get(itemId);
      console.log(response.attributes);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGet() {
    console.log('Get');

    try {
      const query = new Parse.Query('Post'); // eslint-disable-line

      const response = await query.find();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(itemId) {
    console.log('Delete');

    try {
      const query = new Parse.Query('Post'); // eslint-disable-line
      const object = await query.get(itemId);
      console.log(object.attributes);

      const response = await object.destroy();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Exemplo</h1>

      <button type="button" onClick={handleSend}>
        Enviar!
      </button>
      <button type="button" onClick={() => handleGetOne('1elK2SAFjC')}>
        Get One!
      </button>
      <button type="button" onClick={() => handleGet()}>
        Get All!
      </button>
      <button type="button" onClick={() => handleDelete('vH2auypHT7')}>
        Delete!
      </button>
    </Container>
  );
}

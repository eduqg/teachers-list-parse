/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import Parse from 'parse';
import {
  Container,
  SearchInput,
  TeachersList,
  Card,
  CardHeader,
  CardImage,
  CardMiddle,
  TeacherName,
  TeacherFields,
  Field,
  TeacherStars,
  CardBottom,
  CardButton,
} from './styles';

export default function List() {
  Parse.initialize(
    process.env.REACT_APP_APP_ID,
    process.env.REACT_APP_JAVASCRIPT_KEY,
    process.env.REACT_APP_MASTER_KEY
  );

  Parse.serverURL = 'https://server-teachers-list.herokuapp.com/parse';

  const [teachers, setTeachers] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    console.log('Get teachers');

    async function loadAll() {
      try {
        const query = new Parse.Query('Teacher');

        const response = await query.find();

        console.log(response);
        setTeachers(response);
      } catch (error) {
        console.log(error);
      }
    }

    loadAll();
  }, []);

  useEffect(() => {
    async function reLoad() {
      try {
        const query = new Parse.Query('Teacher');

        if (pesquisa !== '') {
          query.matches('nome', pesquisa, 'i');
        }
        const response = await query.find();

        setTeachers(response);
      } catch (error) {
        console.log(error);
      }
    }

    reLoad();
  }, [pesquisa]);

  return (
    <Container>
      <SearchInput
        type="text"
        name="pesquisa"
        placeholder="Pesquise um professor"
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
      />

      <TeachersList>
        {teachers.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardImage src={item.attributes.imagem._url} />
              <CardMiddle>
                <TeacherName>{item.attributes.nome}</TeacherName>
                <TeacherFields>
                  {item.attributes.materia.map(subitem => (
                    <Field key={subitem}>{subitem}</Field>
                  ))}
                </TeacherFields>
              </CardMiddle>
              <TeacherStars>{item.attributes.nota}</TeacherStars>
            </CardHeader>
            <CardBottom>
              <CardButton to="/teachers">Selecionar</CardButton>
            </CardBottom>
          </Card>
        ))}
      </TeachersList>
    </Container>
  );
}

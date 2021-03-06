/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import Modal from '../../components/Modal';

import logo from '../../assets/logo-cinza.png';

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
  CardFields,
  Field,
  TeacherStars,
  CardBottom,
  CardButton,
  ModalImage,
  ModalTop,
  ModalMiddle,
  ModalLocation,
  ModalCurriculum,
  Loading,
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
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teacherInfo, setTeacherInfo] = useState({
    nome: '',
    imagem_url: '',
    curriculo: '',
    nota: 0,
    bairro: '',
    materias: [],
  });

  useEffect(() => {
    setLoading(true);
    console.log('Get teachers');

    async function loadAll() {
      try {
        const query = new Parse.Query('Teacher');

        const response = await query.find();

        console.log(response);
        setTeachers(response);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    loadAll();
  }, []);

  useEffect(() => {
    setLoading(true);

    async function reLoad() {
      try {
        const query = new Parse.Query('Teacher');

        if (pesquisa !== '') {
          query.matches('nome', pesquisa, 'i');
        }
        const response = await query.find();

        setTeachers(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    reLoad();
  }, [pesquisa]);

  function handleOpenModal(item) {
    const data = {
      nome: item.attributes.nome,
      imagem_url: item.attributes.imagem._url,
      curriculo: item.attributes.curriculo,
      nota: item.attributes.nota,
      bairro: item.attributes.bairro,
      materias: item.attributes.materia,
    };

    setTeacherInfo(data);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <Container>
      <SearchInput
        type="text"
        name="pesquisa"
        placeholder="Pesquise um professor"
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
      />

      {loading && <Loading src={logo} />}


      <TeachersList>
        {teachers.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardImage src={item.attributes.imagem._url} />
              <CardMiddle>
                <TeacherName testid={item.attributes.nome}>
                  {item.attributes.nome}
                </TeacherName>
              </CardMiddle>
              <TeacherStars>{item.attributes.nota}</TeacherStars>
            </CardHeader>

            <CardFields>
              <TeacherFields>
                {item.attributes.materia.map(subitem => (
                  <Field key={subitem}>{subitem}</Field>
                ))}
              </TeacherFields>
            </CardFields>

            <CardBottom>
              <CardButton
                name={item.attributes.nome}
                onClick={() => handleOpenModal(item)}
              >
                Selecionar
              </CardButton>
            </CardBottom>
          </Card>
        ))}
      </TeachersList>

      <Modal handleClose={handleCloseModal} show={showModal}>
        <ModalTop>
          <ModalImage src={teacherInfo.imagem_url} />
          <TeacherName>{teacherInfo.nome}</TeacherName>
          <ModalLocation>{teacherInfo.bairro}</ModalLocation>
          <TeacherStars>{teacherInfo.nota}</TeacherStars>
          <TeacherFields>
            {teacherInfo.materias.map(modalItem => (
              <Field key={modalItem}>{modalItem}</Field>
            ))}
          </TeacherFields>
        </ModalTop>
        <ModalMiddle>
          <ModalCurriculum>{teacherInfo.curriculo}</ModalCurriculum>
        </ModalMiddle>
      </Modal>
    </Container>
  );
}

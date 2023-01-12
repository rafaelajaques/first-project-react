import React, { useState, useRef, } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/title'
import ContainerItems from '../../components/containerItems';
import Button from '../../components/button';

import { Container, Image, InputLabel, Input, } from './style';

function App() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post('https://projeto-node-gules.vercel.app/', { name: inputName.current.value, age: inputAge.current.value, })

    setUsers([...users, newUser])

    navigate('/usuarios')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItems>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItems>
    </Container>
  );
}

export default App;
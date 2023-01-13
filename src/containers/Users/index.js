import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/title'
import ContainerItems from '../../components/containerItems';
import Button from '../../components/button';

import { Container, Image, User } from './style';

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get('https://projeto-node-rj.vercel.app/users')

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`https://projeto-node-rj.vercel.app/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackPage() {
    navigate('/')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name} </p> <p> {user.age} </p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}><img alt="seta" src={Arrow} />Voltar </Button>

      </ContainerItems>
    </Container>
  );
}

export default Users;
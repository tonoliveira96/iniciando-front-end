import React, {useCallback} from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit= useCallback(async(data: Object)=>{
    console.log(data)
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email(),
        password: Yup.string().min(6, 'Mínimo 6 dígitos')
      })

      await schema.validate(data,{
        abortEarly: false
      })

    }catch(err){
      console.log(err)
    }
  }, [])

  return(
    <Container>
    <Background />

    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>

      </Form>

      <a href="login">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>

  </Container>
  )
};

export default SignUp;

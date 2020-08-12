import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory} from 'react-router-dom'

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast} = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

         //recuperação de senha

        // history.push('/dashboard')
      } catch (err) {

        if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'info',
          title: 'Erro na recuperação de senha',
          description: 'Ocorreu um erro ao fazer a recuperação de senha, tente novamente!'
        });
      }
    },
    [ addToast],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Recuperar</Button>

        </Form>

        <Link to="/">
          <FiLogIn />
          Voltar ao login
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;

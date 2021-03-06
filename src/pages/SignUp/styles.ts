import styled from 'styled-components';
import { shade } from 'polished';
import SignUpbackgroungImg from '../../assets/sing-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 0 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #faede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${(shade(0.3), '#Faede8')};
      }
    }
  }

  > a {
    color: #F4EDE8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg{
      margin-right: 16px;
    }
    &:hover {
        color: ${shade(0.3, '#F4EDE8')};
      }
  }
`;

export const Background = styled.div`
  /*  */
  flex: 1;
  background: url(${SignUpbackgroungImg}) no-repeat center;
  background-size: cover;
`;

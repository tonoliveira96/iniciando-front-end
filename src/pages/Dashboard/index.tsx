import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Appointment,
  Section,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectdate, setSelectDate] = useState(new Date())

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img src="https://avatars1.githubusercontent.com/u/43159625?s=460&u=08567372edcab56e9f803be46ed3adb47a4843f5" alt=""/>

              <strong>Fulano</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
              <img src="https://avatars1.githubusercontent.com/u/43159625?s=460&u=08567372edcab56e9f803be46ed3adb47a4843f5" alt=""/>
              <strong>Fulano</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                15:00
              </span>

              <div>
              <img src="https://avatars1.githubusercontent.com/u/43159625?s=460&u=08567372edcab56e9f803be46ed3adb47a4843f5" alt=""/>
              <strong>Fulano</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar></Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;

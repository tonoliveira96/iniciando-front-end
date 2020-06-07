import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer'

import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignIn /> */}
      <SignIn />
    </AuthProvider>
    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;

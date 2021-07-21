import React from 'react';
import { RegistrationContainer } from './signIn-signUp.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
  <RegistrationContainer>
    <SignIn />
    <SignUp />
  </RegistrationContainer>
);

export default SignInAndSignUp;

import React from 'react';
import { connect } from 'react-redux';
import { SignInContainer, Title, ButtonsContainer } from './sign-in-styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'gio@gio.de',
      password: '12345678'
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password)
  }
  
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput 
            name='password'
            type='password'
            value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);

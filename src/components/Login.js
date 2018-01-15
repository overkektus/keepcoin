import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Form, Item, Label, Input, Text, Button, H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import StringResource from '../constants/stringResource';
import Loading from './Loading';
import Messages from './Messages';
import Spacer from './Spacer';
import Header from './Header';
import stringResource from '../constants/stringResource';


class Login extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    email: null,
    user: {}
  }

  constructor(props) {
    super(props);

    this.state = {
      email: (props.user && props.user.email) ? props.user.email : '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this),
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val
    });
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => Actions.tabbar())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading/>

    return (
      <Conntainer>
        <Content padder>
          <Header title={StringResource.authText}/>

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>{stringResource.emailText}</Label>
              <Input
                autoCapitalize='none'
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
            <Label>{stringResource.passwordText}</Label>
              <Input
                secureTextEntry
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Conntainer>
    );
  }
}

export default Login;

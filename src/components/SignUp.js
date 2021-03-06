import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';
import stringResource from '../constants/stringResource';

class SignUp extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => Actions.login())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          <Header title={stringResource.regText} />

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>{stringResource.usernameText}</Label>
              <Input 
                autoCapitalize="none"
                autonChangeText={v => this.handleChange('username', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
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

            <Item stackedLabel>
              <Label>{stringResource.confirmPasswordText}</Label>
              <Input
                secureTextEntry
                onChangeText={v => this.handleChange('password2', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button
              block
              onPress={this.handleSubmit}
            >
              <Text>{stringResource.regActionText}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SignUp;
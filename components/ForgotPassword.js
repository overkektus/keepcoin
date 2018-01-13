import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';
import stringResource from '../constants/stringResource';

class ForgotPassword extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    user: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.user && props.user.email) ? props.user.email : '',
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
          <Header title={stringResource.resetPasswordText} />

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>{stringResource.emailText}</Label>
              <Input
                autoCapitalize="none"
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button
              block
              onPress={this.handleSubmit}
            >
              <Text>{stringResource.resetPasswordActionText}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default ForgotPassword;

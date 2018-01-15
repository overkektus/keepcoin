import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { CheckBox } from 'native-base';
import Messages from './components/Messages';

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB_NRft-kpgEZvov_F6LLJDHFoVzXL9Xk0',
      authDomain: 'keepcoin-b2e56.firebaseapp.com'
    }

    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn() {
    this.setState({
      authenticating: true
    });
  }

  renderCurrentState() {
     if (this.state.authenticating) {
       return (
          <View style={styles.form}>
           <ActivityIndicator size="large" />
          </View>
       )
     }

     return (
        <View style={styles.form}>
          <Input
            placeholder='Введите ваш email...'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Input
            placeholder='Введите ваш пароль...'
            label='Пароль'
            secureTextEntry
            onChangeText={password => this.setState({ email })}
            value={this.state.password}
          />
          <Button onPress={() => this.onPressSignIn()}>Войти</Button>
        </View>
     )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
        <Messages type='success' message='Успех епт'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});

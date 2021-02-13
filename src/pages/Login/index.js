import React, {useState, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {AuthContext} from '../../contexts/auth';

import {
  Container,
  ContainerInput,
  Input,
  Title,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles';

export default function Login() {
  const {signIn, signUp, loadingAuth} = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }

    signIn(email, password);
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }
    //cadastando user
    signUp(email, password, name);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev
          <Text style={{color: '#e52246'}}>Post</Text>
        </Title>

        <Input
          placeholder="email@email.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="******"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
        </Button>

        <SignUpButton onPress={() => toggleLogin()}>
          <SignUpText>Criar uma conta.</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Dev
        <Text style={{color: '#e52246'}}>Post</Text>
      </Title>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="email@email.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="******"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <SignUpButton onPress={() => toggleLogin()}>
        <SignUpText>Já tenho uma conta.</SignUpText>
      </SignUpButton>
    </Container>
  );
}

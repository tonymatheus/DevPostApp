import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  ContainerInput,
  Input,
  Title,
  Button,
  ButtonText,
  SignupButton,
  SignupText,
} from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
    setEmail('');
    setPassword('');
    setName('');
  }

  function handleLogin() {
    if (email === '' || password === '') {
      console.log('Preencha todos os dados');
      return;
    }
    alert('Logado');
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      console.log('Preencha todos os dados');
      return;
    }
    alert('Cadastrado com sucesso');
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#e52246'}}>Post</Text>
        </Title>
        <Input
          placeholder="Email@email.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autocapitalized="none"
          autocorrect={false}
        />
        <Input
          placeholder="senha"
          value={password}
          onChangeText={({text}) => setPassword(text)}
          autocapitalized="none"
          autocorrect={false}
          secureTextEntry={true}>
          <Text />
        </Input>
        <Button onPress={handleLogin}>
          <ButtonText>Acessar</ButtonText>
        </Button>
        <SignupButton onPress={toggleLogin}>
          <SignupText>criar uma conta</SignupText>
        </SignupButton>
      </Container>
    );
  }
  return (
    <Container>
      <Title>
        Dev<Text style={{color: '#e52246'}}>Post</Text>
      </Title>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        autocapitalized="none"
        autocorrect={false}
      />
      <Input
        placeholder="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autocapitalized="none"
        autocorrect={false}
      />
      <Input
        placeholder="senha"
        value={password}
        onChangeText={({text}) => setPassword(text)}
        autocapitalized="none"
        autocorrect={false}
        secureTextEntry={true}>
        <Text />
      </Input>
      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <SignupButton onPress={toggleLogin}>
        <SignupText>já tenho uma conta</SignupText>
      </SignupButton>
    </Container>
  );
}

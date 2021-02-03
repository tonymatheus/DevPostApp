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

  function toggleLogin() {
    setLogin(!login);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#e52246'}}>Post</Text>
        </Title>
        <Input
          placeholder="Email@email.com"
          autocapitalized="none"
          autocorrect={false}
        />
        <Input
          placeholder="senha"
          autocapitalized="none"
          autocorrect={false}
          secureTextEntry={true}>
          <Text />
        </Input>
        <Button onPress={() => alert('Teste')}>
          <ButtonText>Login</ButtonText>
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
      <Input placeholder="Nome" autocapitalized="none" autocorrect={false} />
      <Input placeholder="email" autocapitalized="none" autocorrect={false} />
      <Input
        placeholder="senha"
        autocapitalized="none"
        autocorrect={false}
        secureTextEntry={true}>
        <Text />
      </Input>
      <Button onPress={() => alert('Teste')}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <SignupButton onPress={toggleLogin}>
        <SignupText>já tenho uma conta</SignupText>
      </SignupButton>
    </Container>
  );
}

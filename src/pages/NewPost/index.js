import React, {useState, useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Input, ButtonText, Button} from './styles';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../contexts/auth';

export default function NewPost() {
  const navigation = useNavigation();
  const [post, setPost] = useState('');
  const {user} = useContext(AuthContext);
  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button>
          <ButtonText onPress={() => handlePost()}>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post]);

  async function handlePost() {
    if (post === '') {
      console.log('Seu posto é  invalido');
      return;
    }
    let avatarUrl = null;
    try {
      let response = await storage
        .ref('users')
        .child(user?.uid)
        .getDownloadUrl();
      avatarUrl = response;
    } catch (error) {
      avatarUrl = null;
    }

    await firestore()
      .collection('posts')
      .add({
        created: new Date(),
        content: post,
        autor: user.nome,
        likes: 0,
        avatarUrl,
        userId: user.uid,
      })
      .then(() => {
        setPost('');
        console.log('POST CRIADO COM SUCESSO');
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.goBack();
  }

  return (
    <Container>
      <Input
        placeholder="novo post"
        placeholderTextColor="#ddd"
        multiline={true}
        maxLenght={300}
        value={post}
        onChangeText={(text) => {
          setPost(text);
        }}
        autoCorrect={false}
      />
    </Container>
  );
}

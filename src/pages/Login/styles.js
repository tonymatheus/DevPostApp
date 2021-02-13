import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #36393f;
`;

export const ContainerInput = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  font-style: italic;
`;

export const Input = styled.TextInput`
  display: flex;
  background-color: #eee;
  color: #000;
  width: 85%;
  color: black;
  padding: 14px;
  border-radius: 8px;
  font-size: 19px;
  font-weight: 600;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  align-content: center;
  align-self: center;
  color: #fff;
  padding: 5px;
  font-size: 20px;
  font-weight: 900;
`;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 50px;
  background-color: #418cfd;
  align-self: center;
  margin-top: 8px;
  padding: 10px;
  margin: 8px;
  border-radius: 10px;
`;

export const SignUpButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`;
export const SignUpText = styled.Text`
  color: #ddd;
  font-weight: 600;
  font-size: 18px;
`;

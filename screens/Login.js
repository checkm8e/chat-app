import React from "react";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import { View, Text, TextInput, Pressable } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

const Login = () => {
  const [loaded] = useFonts({
    Poppins_bold: require("./../assets/fonts/Poppins-Bold.ttf"),
    Poppins_medium: require("./../assets/fonts/Poppins-Medium.ttf"),
    Poppins_regular: require("./../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Body>
      <Container>
        <Header>
          <Heading>Welcome,</Heading>
          <Title>Sign in to continue!</Title>
        </Header>

        <FormWrapper>
          <InputWrapper>
            <InputText>Email</InputText>
            <InputForm placeholder="Enter your email" />
            <InputBorder />
          </InputWrapper>

          <InputWrapper>
            <InputText>Password</InputText>
            <InputForm placeholder="Password" />
            <InputBorder />
          </InputWrapper>
          <ForgetPasswordText>Forget Password?</ForgetPasswordText>

          <LoginBtn>
            <LoginText>Login</LoginText>
          </LoginBtn>
        </FormWrapper>

        <Footer>
          <FooterMessage>Don't have a account?</FooterMessage>
          <FooterBtn>
            <Highlight>Sign-up</Highlight>
          </FooterBtn>
        </Footer>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

const Body = styled.View`
  background-color: #fcf8ff;
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-item: center;
  margin: 0px 38px 0px 40px;
`;

const Header = styled.View`
  padding-top: ${statusBarHeight + 100}px;
`;

const Heading = styled.Text`
  font-size: 34px;
  font-family: "Poppins_bold";
  color: #3e207c;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: "Poppins_medium";
  top: -20px;
  padding-left: 4px;
`;

const FormWrapper = styled.View`
  top: 50px;
  margin-bottom: 100px;
`;

const InputWrapper = styled.View`
  height: 74px;
  margin-top: 20px;
`;

const InputText = styled.Text`
  font-family: "Poppins_medium";
  font-size: 18px;
  color: #3e207c;
`;

const InputForm = styled.TextInput`
  font-family: "Poppins_regular";
  font-size: 16px;
  color: #000;
  padding: 0;
  top: 15px;
  width: 100%;
`;

const InputBorder = styled.Text`
  background-color: #3e207c;
  height: 1.5px;
  top: 10px;
  width: 100%;
`;

const ForgetPasswordText = styled.Text`
  font-size: 16px;
  color: #845ec2;
  text-align: right;
`;

const LoginBtn = styled.Pressable`
  background-color: #3e207c;
  width: 100%;
  height: 60px;
  margin-top: 50px;
  border-radius: 25px;
`;

const LoginText = styled.Text`
  color: #fff;
  font-family: "Poppins_bold";
  font-size: 24px;
  text-align: center;
  letter-spacing: 2px;
  padding-top: 11px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
`;

const FooterMessage = styled.Text`
  font-family: "Poppins_regular";
  font-size: 16px;
  text-align: center;
  color: #000;
`;

const FooterBtn = styled.Pressable`
  padding-left: 5px;
`;

const Highlight = styled.Text`
  font-family: "Poppins_regular";
  font-size: 16px;
  color: #845ec2;
`;

export default Login;

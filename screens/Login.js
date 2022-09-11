import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { View, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
  FormWrapper,
  InputWrapper,
  InputText,
  InputForm,
  InputBorder,
  ForgetPasswordText,
  Btn,
  BtnText,
  Footer,
  FooterMessage,
  FooterBtn,
  Highlight,
} from "./../components/styles.js";

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
        <Pressable>
          <Ionicons
            name="arrow-back-circle-outline"
            size={54}
            color="#3e207c"
          />
        </Pressable>

        <ScrollView>
          <Header>
            <Heading>Welcome,</Heading>
            <Title>Sign in to continue!</Title>
          </Header>

          <FormWrapper style={{ marginTop: 60 }}>
            <InputWrapper>
              <MyTextInput label="Email" placeholder="Enter your email" />
            </InputWrapper>

            <InputWrapper>
              <MyTextInput label="Password" placeholder="Password" />
            </InputWrapper>
            <ForgetPasswordText>Forget Password?</ForgetPasswordText>

            <Btn>
              <BtnText>Sign in</BtnText>
            </Btn>
          </FormWrapper>

          <Footer>
            <FooterMessage>Don't have a account?</FooterMessage>
            <FooterBtn>
              <Highlight>Sign-up</Highlight>
            </FooterBtn>
          </Footer>
        </ScrollView>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
      <InputText>{label}</InputText>
      <InputForm {...props} />
      <InputBorder />
    </View>
  );
};

export default Login;

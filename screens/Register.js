import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { View, ScrollView } from "react-native";

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
  LoginBtn,
  LoginText,
  Footer,
  FooterMessage,
  FooterBtn,
  Highlight,
} from "./../components/styles.js";

const Register = () => {
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
      <ScrollView>
        <Container>
          <Header>
            <Heading style={{ fontSize: 30 }}>Create Account,</Heading>
            <Title style={{ fontSize: 16 }}>
              Please fill the form to continue.
            </Title>
          </Header>

          <FormWrapper>
            <InputWrapper
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <MyTextInput label="First Name" placeholder="First" />
              <MyTextInput label="Last Name" placeholder="Last" />
            </InputWrapper>

            <InputWrapper>
              <MyTextInput label="Email" placeholder="Enter your email" />
            </InputWrapper>

            <InputWrapper>
              <MyTextInput label="Password" placeholder="Password" />
            </InputWrapper>

            <InputWrapper>
              <MyTextInput label="Confirm Password" placeholder="Password" />
            </InputWrapper>

            <LoginBtn>
              <LoginText>Login</LoginText>
            </LoginBtn>
          </FormWrapper>

          <Footer style={{ marginTop: 60 }}>
            <FooterMessage>Don't have a account?</FooterMessage>
            <FooterBtn>
              <Highlight>Sign-up</Highlight>
            </FooterBtn>
          </Footer>
        </Container>
      </ScrollView>
      <StatusBar auto />
    </Body>
  );
};

// For form input
// label = Name of form eg.: Name, Email, Password, etc.
// props = TextInput props eg.: allowFontScaling, autoCapitalize, etc.
const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
      <InputText>{label}</InputText>
      <InputForm {...props} />
      <InputBorder />
    </View>
  );
};

export default Register;

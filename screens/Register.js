import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { View, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  Btn,
  BtnText,
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

            <Btn>
              <BtnText>Sign up</BtnText>
            </Btn>
          </FormWrapper>

          <Footer style={{ marginTop: 60 }}>
            <FooterMessage>Already have a account?</FooterMessage>
            <FooterBtn>
              <Highlight>Sign-in</Highlight>
            </FooterBtn>
          </Footer>
        </ScrollView>
      </Container>
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

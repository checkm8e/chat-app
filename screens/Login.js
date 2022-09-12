import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Formik } from "formik";

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
  RightIcon,
} from "./../components/styles.js";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <FormWrapper style={{ marginTop: 60 }}>
                <InputWrapper>
                  <MyTextInput
                    label="Email"
                    placeholder="Enter your email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </InputWrapper>

                <InputWrapper>
                  <MyTextInput
                    label="Password"
                    placeholder="* * * * * * * * * *"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                </InputWrapper>
                <ForgetPasswordText>Forget Password?</ForgetPasswordText>

                <Btn onPress={handleSubmit}>
                  <BtnText>Sign in</BtnText>
                </Btn>
              </FormWrapper>
            )}
          </Formik>
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

const MyTextInput = ({
  label,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <InputText>{label}</InputText>
      <InputForm {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={30}
            color="#3e207c"
          />
        </RightIcon>
      )}
      <InputBorder />
    </View>
  );
};

export default Login;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Formik } from "formik";

import { View, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// For form validation
import * as Yup from "yup";

validationSchema = Yup.object({
  email: Yup.string().email("*Invalid email!").required("*Email is required!"),
  password: Yup.string().trim().required("*Password is required!"),
});

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
  FormWrapper,
  InputWrapper,
  InputText,
  ErrorText,
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

const Login = ({ navigation }) => {
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
        <Pressable onPress={() => navigation.goBack()}>
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
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              values,
            }) => (
              <FormWrapper style={{ marginTop: 60 }}>
                <InputWrapper>
                  <MyTextInput
                    label="Email"
                    placeholder="Enter your email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    error={touched.email && errors.email}
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
                    error={touched.password && errors.password}
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
              <Pressable onPress={() => navigation.navigate("Register Screen")}>
                <Highlight>Sign-up</Highlight>
              </Pressable>
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
  error,
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
      {error ? <ErrorText>{error}</ErrorText> : null}
    </View>
  );
};

export default Login;

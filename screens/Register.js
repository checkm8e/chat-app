import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Formik } from "formik";

import { View, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// For form validation
import * as Yup from "yup";

validationSchema = Yup.object({
  email: Yup.string().email("*Invalid email!").required("*Email is required!"),
  password: Yup.string()
    .trim()
    .min(8, "*Password is too sort!")
    .required("*Password is required!"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "*Password does not match!"
  ),
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
  Btn,
  BtnText,
  Footer,
  FooterMessage,
  FooterBtn,
  Highlight,
  RightIcon,
} from "./../components/styles.js";

const Register = ({ navigation }) => {
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
            <Heading style={{ fontSize: 30 }}>Create Account,</Heading>
            <Title style={{ fontSize: 16 }}>
              Please fill the form to continue.
            </Title>
          </Header>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
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
              <FormWrapper>
                <InputWrapper
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <MyTextInput
                    label="First Name"
                    placeholder="First"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  <MyTextInput
                    label="Last Name"
                    placeholder="Last"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                </InputWrapper>

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
                    placeholder="Password"
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

                <InputWrapper>
                  <MyTextInput
                    label="Confirm Password"
                    placeholder="Password"
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    error={touched.confirmPassword && errors.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                </InputWrapper>

                <Btn onPress={handleSubmit}>
                  <BtnText>Sign up</BtnText>
                </Btn>
              </FormWrapper>
            )}
          </Formik>

          <Footer style={{ marginTop: 60 }}>
            <FooterMessage>Already have a account?</FooterMessage>
            <FooterBtn>
              <Pressable onPress={() => navigation.navigate("Login Screen")}>
                <Highlight>Sign-in</Highlight>
              </Pressable>
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

export default Register;

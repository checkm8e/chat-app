import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
  Btn,
  BtnText,
} from "./../components/styles.js";

const Welcome = () => {
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
        <Header style={{ alignItems: "center" }}>
          <Heading style={{ marginBottom: 10 }}>ChatApp</Heading>
          <Title>A simple, secure easy to use</Title>
          <Title style={{ top: -30 }}>Messaging App</Title>
        </Header>

        <Btn>
          <BtnText>Sign up</BtnText>
        </Btn>
        <Btn>
          <BtnText>Sign in</BtnText>
        </Btn>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

export default Welcome;

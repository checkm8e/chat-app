import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
} from "./../components/styles.js";

const Home = () => {
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
          <Heading>After login - -</Heading>
          <Title>Main page</Title>
        </Header>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

export default Home;

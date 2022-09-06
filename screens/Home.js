import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
} from "./../components/styles.js";

const Home = () => {
  return (
    <Body>
      <Container>
        <Header>
          <Heading>This is -</Heading>
          <Title>Home page</Title>
        </Header>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

export default Home;

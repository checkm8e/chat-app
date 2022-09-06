import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  Body,
  Container,
  Header,
  Heading,
  Title,
} from "./../components/styles.js";

const Main = () => {
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

export default Main;

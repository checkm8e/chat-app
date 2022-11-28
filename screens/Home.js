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
  Footer,
} from "./../components/styles.js";

const Home = ({navigation}) => {
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
          <Heading>Main Chatting app - -</Heading>
          <Title>Work under progress...</Title>
        </Header>

        <Footer>
          <Btn onPress={() => navigation.navigate("Login Screen")}>
            <BtnText>Logout</BtnText>
          </Btn>
        </Footer>
      </Container>
      <StatusBar auto />
    </Body>
  );
};

export default Home;

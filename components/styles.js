// Code:
// contains styles for Login.js and Register.js

// All imports
import styled from "styled-components";
import Constants from "expo-constants";

// All variables
const statusBarHeight = Constants.statusBarHeight;
const Colors = {
  primary: "#3e207c",
  secondary: "#845ec2",
  ternary: "#fcf8ff",
};

const { primary, secondary, ternary } = Colors;

// Styles starts here
// Main Body
export const Body = styled.View`
  background-color: ${ternary};
  height: 100%;
`;

// cantainer with margin
export const Container = styled.View`
  flex: 1;
  align-item: center;
  margin: 0px 38px 0px 40px;
  padding-top: ${statusBarHeight}px;
`;

export const Header = styled.View`
  margin-top: 50px;
`;

export const Heading = styled.Text`
  font-size: 34px;
  font-family: "Poppins_bold";
  color: ${primary};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Poppins_medium";
  top: -20px;
  padding-left: 4px;
`;

export const FormWrapper = styled.View`
  margin-top: 20px;
`;

export const InputWrapper = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const InputText = styled.Text`
  font-family: "Poppins_medium";
  font-size: 18px;
  color: ${primary};
`;

export const InputForm = styled.TextInput`
  font-family: "Poppins_regular";
  font-size: 16px;
  color: #000;
  padding: 0;
  top: 15px;
  width: 100%;
`;

export const InputBorder = styled.Text`
  background-color: ${primary};
  position: relative;
  height: 1.5px;
  top: 10px;
  width: 100%;
`;

export const ForgetPasswordText = styled.Text`
  font-size: 16px;
  color: ${secondary};
  text-align: right;
`;

export const LoginBtn = styled.Pressable`
  background-color: ${primary};
  width: 100%;
  height: 60px;
  margin-top: 50px;
  border-radius: 25px;
`;

export const LoginText = styled.Text`
  color: #fff;
  font-family: "Poppins_bold";
  font-size: 24px;
  text-align: center;
  letter-spacing: 2px;
  padding-top: 11px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
`;

export const FooterMessage = styled.Text`
  font-family: "Poppins_regular";
  font-size: 16px;
  text-align: center;
  color: #000;
`;

export const FooterBtn = styled.Pressable`
  padding-left: 5px;
`;

export const Highlight = styled.Text`
  font-family: "Poppins_regular";
  font-size: 16px;
  color: ${secondary};
`;

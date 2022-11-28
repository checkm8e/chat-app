import React from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";

// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// creating a navigation stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome Screen"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register Screen"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login Screen"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home Screen"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

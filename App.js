import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import LoginInScreen from "./screens/LoginScreen.js";
import { useCurrentUser, UserProvider } from "./context/UserContext.js";
import { useState } from "react";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Sign In" component={LoginInScreen} />
    </Stack.Navigator>
  );
}

function Authenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function Navigate() {
  const { user } = useCurrentUser();
  return (
    <NavigationContainer>
      {!user && <Auth />}
      {user && <Authenticated />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <UserProvider>
        <Navigate />
      </UserProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
